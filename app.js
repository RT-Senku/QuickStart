const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Login Test Site</h1>
    <form method="POST" action="/login">
      <input name="username" placeholder="Username"/><br/>
      <input name="password" type="password" placeholder="Password"/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    res.send('Welcome back admin!');
  } else {
    res.send('Login failed.');
  }
});

app.listen(port, () => console.log(`App running on port ${port}`));

app.get('/secret', (req, res) => {
  const pwd = req.query.pwd;
  if (pwd === 'letmein') {
    res.send('🎉 FÉLICITATIONS, tu as trouvé le secret !');
  } else {
    res.send('Accès refusé.');
  }
});


app.get('/admin', (req, res) => {
  res.send('Panneau d’administration');
});

app.get('/login', (req, res) => {
  res.send('Page de connexion');
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard utilisateur');
});

app.get('/test', (req, res) => {
  res.send('Environnement de test');
});

app.get('/backup', (req, res) => {
  res.send('Fichier backup présent');
});

app.get('/old', (req, res) => {
  res.send('Ancienne version du site');
});
