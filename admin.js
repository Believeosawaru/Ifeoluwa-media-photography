const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: String,
   email: String,
   age: Number
})


const User = mongoose.model('User', userSchema);

const newUser = new User({
   name: 'john doe',
   email: 'john@gmail.com',
   age: 30
});

newUser.save()
.then((user) => {
   console.log('user has been created', user)
})

// const fileUpload = require('express-fileupload');

// const filesPayloadExists = require('./middleware/filesPayloadExists')
// const fileExtLimiter = require('./middleware/fileExtLimiter')
// const filesSizeLimiter = require('./middleware/fileSizeLimiter')

// const filesToUpload = []

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://believeosawaru2:ifeoluwa2@cluster0.lbmrifo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
   console.log('connected to database');
})
.catch((err) => {
   console.err('error connecting to db');
})
// middleware
// app.use(bodyParser.json());
// app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// monogo URI
// const mongoURI = 'mongodb+srv://believeosawaru2:ifeoluwa2@cluster0.lbmrifo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// // create mongo connection

// const conn = mongoose.createConnection(mongoURI);

// // init gridfs
// let gfs;

// conn.once('open', () => {
//    // init stream
//    gfs = Grid(conn.db, mongoose.mongo);
//    gfs.collection('uploads')
// })

// // create storage engine
// const storage = new GridFsStorage({
//    uri: mongoURI,
//    file: (req, file) => {
//       return new Promise((resolve, reject) => {
//          crypto.randomBytes(16, (err, buf) => {
//             if (err) {
//                return reject(err)
//             }

//             const filename = buf.toString('hex') + path.extname(file.originalname);
//             const fileInfo = {
//                filename: filename,
//                bucketName: 'uploads'
//             };

//             resolve(fileInfo)
//          })
//       })
//    }
// });


// const upload = multer({ storage })

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

// app.post('/upload',
//    fileUpload({ createParentPath: true }), filesPayloadExists, fileExtLimiter(['.png','.jpg','.jpeg']),
//    filesSizeLimiter,
//     (req, res) => {
//       const files = req.files;
//       console.log(files)

//       Object.keys(files).forEach(key => {
//          const filepath = path.join(__dirname, 'files', files[key].name)
//          files[key].mv(filepath, (err) => {
//             if (err) return res.status(500).json({ status: 'error', message: err })
//          })
//       })

//       filesToUpload.push({
//          name: Object.keys(files).toString(),
//       })
//       console.log(filesToUpload)

//       // return res.json({status: 'success', message: Object.keys(files).toString() })
//    }
// )

app.listen(PORT, (req, res) => {
     console.log('server running....')
});