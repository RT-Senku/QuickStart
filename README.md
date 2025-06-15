# Login Test App

Une petite app Express avec un formulaire de login vulnérable de test.

## Déploiement sur Render.com

1. Crée un nouveau **Web Service** sur Render.
2. Connecte ton dépôt GitHub.
3. Configure :
   - **Environment** : Node
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
4. Clique sur **Deploy**.
5. Une fois en ligne, utilise `curl` ou tes scripts bash pour tester :
   ```bash
   curl -X POST -d "username=admin&password=1234" https://ton-app.onrender.com/login
