
const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  "https://alafi-baramme-portfolio.onrender.com"
).replace(/\/$/, "");

export type ApiHealth = {
  status: "ok" | "error";
  service?: string;
};

export async function checkApiHealth(
  signal?: AbortSignal
): Promise<ApiHealth> {
  const response = await fetch(`${API_BASE_URL}/api/health`, {
    method: "GET",
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    throw new Error(`API indisponible (HTTP ${response.status})`);
  }

  return response.json() as Promise<ApiHealth>;
}
