// src/utils/api.ts
const API_URL = 'http://localhost:3000';

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);
  const posts = await response.json();
  return posts;
}

export async function login(email: string, password: string) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
  if (!response.ok) {
    throw new Error('Error al iniciar sesión');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
}

export async function getUserProfile() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/users/id`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Error al obtener el perfil del usuario');
  }
  
  return await response.json();
}

// Implementa otras funciones para interactuar con la API según sea necesario