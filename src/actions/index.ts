import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
    login: defineAction({
        accept: "form",
        input: z.object({
            email: z.string().email("El email no es válido"),
            password: z.string()
        }),
        handler: async (input) => {
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
            if (response.ok) {
                return {
                    ok: true,
                    token: data.token,
                    email: input.email
                }
            }
        }
    }),
    editUser: defineAction({
        accept: "form",
        input: z.object({
            id: z.string(),
            name: z.string().optional(),
            email: z.string().email("El email no es válido"),
            password: z.string().optional()
        }),
        handler: async (input, context) => {
            console.log("input: ", input);
            const token = context.cookies.get("token");
            console.log("token: ", token?.value);
            const response = await fetch(`http://localhost:3000/users/${input.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token?.value}`
                },
                body: JSON.stringify(input)
            })
            const data = await response.json();
            console.log("data: ", data);
            return {
                ok: true,
                data: data
            }
        },
    }),
    logout: defineAction({
        accept: "form",
        handler: async (_, context) => {
            try {
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
        handler: async (input) => {
            try {
                const response = await fetch('http://localhost:3000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(input),
                });
                const data = await response.json();
                if (data.message) {
                    return {
                        ok: false,
                        message: data.message
                    }
                } else {
                    return {
                        ok: true,
                        data: data
                    }
                }
            } catch (error) {
                console.error("Error durante el registro:", error);
                return {
                    ok: false,
                    message: "Error durante el registro"
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