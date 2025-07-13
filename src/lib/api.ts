import Cookies from "js-cookie";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://codeblaze-connect.vercel.app"
    : process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3005";
const authBaseURL =
  process.env.NODE_ENV === "production"
    ? "https://codeblaze-web-backend.onrender.com"
    : process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:5000";

const api = {
  get: async (url: string) => {
    const token = Cookies.get("auth_token");
    const headers: { [key: string]: string } = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const targetURL =
      url.startsWith("/connect/auth") || url.startsWith("/connect/user")
        ? `${authBaseURL}${url}`
        : `${baseURL}${url}`;
    const response = await fetch(targetURL, {
      headers,
    });
    if (!response.ok) {
      return null;
    }
    return response.json();
  },
  post: async (url: string, data: unknown) => {
    const token = Cookies.get("auth_token");
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const targetURL =
      url.startsWith("/connect/auth") || url.startsWith("/connect/user")
        ? `${authBaseURL}${url}`
        : `${baseURL}${url}`;
    const response = await fetch(targetURL, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },
  put: async (url: string, data: unknown) => {
    const token = Cookies.get("auth_token");
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const targetURL =
      url.startsWith("/connect/auth") || url.startsWith("/connect/user")
        ? `${authBaseURL}${url}`
        : `${baseURL}${url}`;
    const response = await fetch(targetURL, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return null;
    }
    return response.json();
  },
};

export default api;
