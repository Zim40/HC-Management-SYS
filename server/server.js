const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const db = require('./config/connection')
const routes = require('./routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(routes);



// app.get('*', (req, res) => {
//     // Possibly edit file path back to res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
//     res.sendFile(path.join(__dirname, 'client', 'index.html'));
// });
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  });

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server & DB running on port ${port}`);
    });
});
