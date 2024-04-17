const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/'); // Specify the directory where files should be stored
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname); // Specify the filename
   }
 });

 const upload = multer({ storage: storage });

 app.post('/upload', upload.single('file'), async (req, res) => {
   const newFile = new File({
     filename: req.file.filename,
     contentType: req.file.mimetype,
     data: fs.readFileSync(req.file.path)
   });
   await newFile.save();
   res.render('success');
 });

 mongoose.connect('mongodb+srv://believeosawaru2:ifeoluwa2@cluster0.lbmrifo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
   console.log('connected to database');
})
.catch((err) => {
   console.error('error connecting to db');
})

const fileSchema = new mongoose.Schema({
   filename: String,
   contentType: String,
   data: Buffer
 });
 const File = mongoose.model('File', fileSchema);

 app.set('view engine', 'ejs')
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

app.get('/category-upload', (req, res) => {
   res.render('category-upload')
});

app.get('/category-delete', (req, res) => {
   res.render('category-delete')
});

app.get('/upload', (req, res) => {
   res.render('upload-page')
});

app.get('/delete', (req, res) => {
   res.render('delete-page')
});

app.get('/studio-upload', (req, res) => {
   res.render('studio-upload');
});
// end of routes

app.listen(PORT, (req, res) => {
     console.log('server running....')
});