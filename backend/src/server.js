import { createServer } from "node:http";

const PORT = Number(process.env.PORT || 4000);
const FRONTEND_URL = process.env.FRONTEND_URL;

function setCorsHeaders(request, response) {
  const origin = request.headers.origin;
  const allowedOrigin = !origin || origin.endsWith(".netlify.app") || origin === FRONTEND_URL ? origin || "*" : null;
  if (allowedOrigin) {
    response.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    response.setHeader("Vary", "Origin");
  }
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

const server = createServer((request, response) => {
  setCorsHeaders(request, response);
  if (request.method === "OPTIONS") { response.writeHead(204); response.end(); return; }
  const pathname = new URL(request.url || "/", "http://localhost").pathname;
  if (request.method === "GET" && pathname === "/") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ name: "Alafi Portfolio API", status: "running", message: "Le backend est opérationnel.", health: "/api/health" }));
    return;
  }
  if (request.method === "GET" && pathname === "/api/health") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "ok", service: "alafi-portfolio-api" }));
    return;
  }
  response.writeHead(404, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ error: "Route introuvable", path: pathname }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("API Alafi Portfolio disponible sur le port " + PORT);
});
