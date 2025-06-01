// src/actions/postAuthData.ts
interface AuthDataTypes {
  login: string;
  mail: string;
  password: string;
  csrf_token: string;
}

export async function postAuthData({ login, mail, password, csrf_token }: AuthDataTypes): Promise<any> {
  const response = await fetch("https://test-music-app.ru/music_web-app_backend/API/reg.php",  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf_token // только этот можно ставить вручную
    },
    body: JSON.stringify({ login, mail, password }),
    credentials: "include" // важно!
  });

  if (!response.ok) {
    throw new Error("Ошибка сети");
  }

  return response.json();
}