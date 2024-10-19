import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    login: defineAction({
        accept: "form",
        input: z.object({
            email: z.string().email("El email no es válido"),
            password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
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
            console.log("response: ", response);
            if(response.ok){
                // Guardar token en server, hacer algo en el client y redirect
                return {
                    ok: true,
                }
            } else {
                return {
                    ok: false,
                    error: "Error al iniciar sesión"
                }
            }
          
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