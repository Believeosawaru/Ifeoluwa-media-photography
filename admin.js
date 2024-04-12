const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/creative-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'creative-image.html'))
});

app.get('/event-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'event-image.html'))
});

app.get('/frames-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'frames-image.html'))
});

app.get('/gallery', (req, res) => {
   res.sendFile(path.join(__dirname, 'gallery.html'))
});

app.get('/kids-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'kids-image.html'))
});

app.get('/lifestyle-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'lifestyle-image.html'))
});

app.get('/photoshoot-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'photoshoot-image.html'))
});

app.get('/product-image', (req, res) => {
   res.sendFile(path.join(__dirname, 'product-image.html'))
});

app.get('/traditional-potrait', (req, res) => {
   res.sendFile(path.join(__dirname, 'frames-image.html'))
});

app.get('/booking', (req, res) => {
   res.sendFile(path.join(__dirname, 'booking.html'))
});

app.get('/services', (req, res) => {
   res.sendFile(path.join(__dirname, 'services.html'))
});

app.get('/ifeoluwa-dashboard', (req, res) => {
   res.render('admin-page')
});
// end of routes

app.listen(PORT, (req, res) => {
     console.log('server running....')
});