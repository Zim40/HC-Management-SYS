const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/connection')

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server & DB running on port ${port}`);
    });
});
