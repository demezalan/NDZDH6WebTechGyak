const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post("/form.html", (req, res) => {
  res.redirect('/');
  console.log(req.body.name);
  console.log(req.body.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});