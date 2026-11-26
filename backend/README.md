# Backend

API Node.js indépendante du frontend.

## Démarrer

```bash
npm run dev
```

Par défaut, le serveur écoute sur le port 4000. Vérifier son état avec :

```
GET http://localhost:4000/api/health
```

Les futures routes métier peuvent être ajoutées dans `src/server.js`.
