const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const port = 3030;


const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

router.get('/wip', (req, res) => {
  res.sendFile(path.join(__dirname + '/wip.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.use('/', router);
app.listen(process.env.PORT || port, () => {
  console.log(`Server connected successfully on port: ${port}`);
});
