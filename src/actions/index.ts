import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    login: defineAction({
        accept: "form",
        input: z.object({
            email: z.string().email(),
            password: z.string()
        }),
        handler: async(input) => {
            console.log("input: ", input);
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(input),
              });
            const data = await response.json();
            console.log("data: ", data);
            if(response.ok){
                // Guardar token en server, hacer algo en el client y redirect
                
                return {
                        ok: true,
                        token: data.token
                    }
                
            } 
          
        }
    }),
    logout: defineAction({
        
        handler: async({cookies}) => {
            try {
                console.log("Cookies antes del logout:", cookies.getAll());
                
                // Eliminar la cookie
                cookies.delete("token", {
                    path: "/",  // Asegúrate de que esto coincida con la configuración original
                    // domain: "tu-dominio.com",  // Si usaste un dominio específico al crear la cookie
                    // secure: true,  // Si la cookie se configuró como segura
                    // httpOnly: true,  // Si la cookie se configuró como httpOnly
                });
                
                console.log("Cookie 'token' eliminada");
                
                // Verificar si la cookie realmente se eliminó
                const remainingCookies = cookies.getAll();
                console.log("Cookies después del logout:", remainingCookies);
                
             
            } catch (error) {
                console.error("Error durante el logout:", error);
                return {
                    success: false,
                    message: "Error al cerrar la sesión"
                };
            }
        }
    }),
    register: defineAction({
        accept: "form",
        input: z.object({
            email: z.string().email("El email no es válido"),
            password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
            name: z.string().nullable().optional().default(null)
        }),
        handler: async(input) => {
            console.log("input: ", input);
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(input),
              });
            console.log("response: ", response)
        }
    }),
    test: defineAction({
        input: z.object({
            name: z.string(),
          }),
          handler: async (input) => {
            return `Hello, ${input.name}!`
          }
    })
}