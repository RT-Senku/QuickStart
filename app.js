const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="username" placeholder="username"/><br/>
      <input name="password" type="password" placeholder="password"/><br/>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    res.send('Welcome back admin !');
  } else {
    res.send('Login failed.');
  }
});

app.listen(port, () => console.log(`App running on port ${port}`));
