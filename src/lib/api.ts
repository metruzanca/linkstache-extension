const BASE_URL = 'http://localhost:3000/api'
// const BASE_URL = 'https://linkstache.vercel.app/api';

export async function getLinks() {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({
      action: 'list',
      user: {
        id: import.meta.env.VITE_USER_ID,
        decryptionKey: import.meta.env.VITE_USER_KEY
      }
    })
  })

  const data = await response.json();
  return data;
}