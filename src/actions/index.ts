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
        accept: "form",
        handler: async(_,context) => {
            console.log("context: ", context)
            try {
                console.log("Cookies antes del logout:", context.cookies.get("token"));
                
                // Eliminar la cookie
                context.cookies.delete("token");
                

                return {
                    ok: true,
                    message: "Sesión cerrada correctamente"
                }
                
             
            } catch (error) {
                console.error("Error durante el logout:", error);
                return {
                    ok: false,
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