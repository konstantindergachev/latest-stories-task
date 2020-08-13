const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const stories = require('./routes/api/stories');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/getTimeStories', stories);

if (process.env.NODE_ENV === 'production') {
  app.use(favicon('app/client/public/img/favicon.ico'));
  app.use(express.static('app/client/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app/client', 'public', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port: ${port}`));
