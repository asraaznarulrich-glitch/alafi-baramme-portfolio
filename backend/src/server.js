import { createServer } from "node:http";

const PORT = Number(process.env.PORT || 4000);

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/api/health") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "ok", service: "alafi-portfolio-api" }));
    return;
  }

  response.writeHead(404, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ error: "Route introuvable" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`API Alafi Portfolio disponible sur http://localhost:${PORT}`);
});
