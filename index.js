const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/get-styles', (req, res) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log('=======',now, hours, minutes, seconds)

  if (hours === 0) {
    res.json({
        useDefault: true
    });
  } else {
    res.json({
        useDefault: false,
        backgroundColor: 'grey',
        color: 'darkblue',
        borderColor: 'blue'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
