const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Tristan Jesus V. Elvinia' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
