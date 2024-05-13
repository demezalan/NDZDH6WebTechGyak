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

  const fs = require('fs');
  const formData = req.body;
  const jsonString = JSON.stringify(formData, null, 2);

  fs.readFile('answers.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    let existingData = [];

    if (data.trim() !== '') {
      existingData = JSON.parse(data);
    }

    existingData.push(formData);
    const updatedJsonString = JSON.stringify(existingData, null, 2);

    fs.writeFile('answers.json', updatedJsonString, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('A new submit has been recorded in answers.json');
      }
    });
  });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
