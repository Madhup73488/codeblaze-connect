import Cookies from "js-cookie";

const baseURL = "http://localhost:5000";

const api = {
  get: async (url: string, useBaseURL = false) => {
    const token = Cookies.get("auth_token");
    const headers: { [key: string]: string } = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(useBaseURL ? `${baseURL}${url}` : url, {
      headers,
    });
    if (!response.ok) {
      return null;
    }
    return response.json();
  },
  post: async (url: string, data: any) => {
    const token = Cookies.get("auth_token");
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`${baseURL}${url}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return null;
    }
    return response.json();
  },
  put: async (url: string, data: any) => {
    const token = Cookies.get("auth_token");
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`${baseURL}${url}`, {
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
