const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post("/form.html", (req, res) => {
  const formData = req.body;
  const jsonString = JSON.stringify(formData, null, 2);

  try {
    fs.readFile('answers.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).send('Error reading file');
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
          return res.status(500).send('Error writing file');
        }
        console.log('A new submit has been recorded in answers.json');
        res.redirect('/');
      });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('There was an error.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
