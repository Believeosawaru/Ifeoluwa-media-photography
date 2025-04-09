const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const { rejects } = require("assert");
const bodyParser = require("body-parser");
const router = express.Router();
const cookieParser = require("cookie-parser");

const sendOtpEmail = require("./utils/sendOtp.js");

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://believeosawaru2:ife@cluster0.klrtwxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.error("error connecting to db");
  });

const Schema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
});

const StudioFile = mongoose.model("studio", Schema);
const EventFile = mongoose.model("event", Schema);
const TraditionalFile = mongoose.model("traditional", Schema);
const CreativeFile = mongoose.model("creative", Schema);
const LifestyleFile = mongoose.model("lifestyle", Schema);
const ProductFile = mongoose.model("product", Schema);
const FramesFile = mongoose.model("frames", Schema);
const KidsFile = mongoose.model("kids", Schema);
const Videos = mongoose.model("video", Schema);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory where files should be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Specify the filename
  },
});

const upload = multer({ storage: storage });

app.post("/upload-studio", upload.single("file"), async (req, res) => {
  const newFile = new StudioFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.post("/upload-event", upload.single("file"), async (req, res) => {
  const newFile = new EventFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.post("/upload-traditional", upload.single("file"), async (req, res) => {
  const newFile = new TraditionalFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.post("/upload-creative", upload.single("file"), async (req, res) => {
  const newFile = new CreativeFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.post("/upload-lifestyle", upload.single("file"), async (req, res) => {
  const newFile = new LifestyleFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.post("/upload-product", upload.single("file"), async (req, res) => {
  const newFile = new ProductFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

//  app.post('/upload-frames', upload.single('file'), async (req, res) => {
//    const newFile = new FramesFile({
//      filename: req.file.filename,
//      contentType: req.file.mimetype,
//      data: fs.readFileSync(req.file.path)
//    });
//    await newFile.save();
//    res.render('success');
//  });

app.post("/upload-frames", upload.array("files", 10), async (req, res) => {
  const files = req.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const newFile = new FramesFile({
      filename: file.filename,
      contentType: file.mimetype,
      data: fs.readFileSync(file.path),
    });
    await newFile.save();
    res.render("success");
  }
});

app.post("/upload-kids", upload.single("file"), async (req, res) => {
  const newFile = new KidsFile({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.post("/upload-videos", upload.single("file"), async (req, res) => {
  const newFile = new Videos({
    filename: req.file.filename,
    contentType: req.file.mimetype,
    data: fs.readFileSync(req.file.path),
  });
  await newFile.save();
  res.render("success");
});

app.get("/display-all-events", async (req, res) => {
  try {
    // retrieve files from db
    const eventFiles = await EventFile.find({});

    // check if there are any event files
    if (eventFiles.length === 0) {
      return res.status(404).send("no images found in the media storage");
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    eventFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-studio", async (req, res) => {
  try {
    // retrieve files from db
    const studioFiles = await StudioFile.find({});

    // check if there are any event files
    if (studioFiles.length === 0) {
      return res.status(404).send("no images found in the media storage");
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    studioFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-traditional", async (req, res) => {
  try {
    // retrieve files from db
    const traditionalFiles = await TraditionalFile.find({});

    // check if there are any event files
    if (traditionalFiles.length === 0) {
      return res.status(404).send("no images found in the media storage");
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    traditionalFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-creative", async (req, res) => {
  try {
    // retrieve files from db
    const creativeFiles = await CreativeFile.find({});

    // check if there are any event files
    if (creativeFiles.length === 0) {
      return;
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    creativeFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-lifestyle", async (req, res) => {
  try {
    // retrieve files from db
    const lifestyleFiles = await LifestyleFile.find({});

    // check if there are any event files
    if (lifestyleFiles.length === 0) {
      return;
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    lifestyleFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-product", async (req, res) => {
  try {
    // retrieve files from db
    const productFiles = await ProductFile.find({});

    // check if there are any event files
    if (productFiles.length === 0) {
      return;
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    productFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-frames", async (req, res) => {
  try {
    // retrieve files from db
    const framesFiles = await FramesFile.find({});

    // check if there are any event files
    if (framesFiles.length === 0) {
      return;
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    framesFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-kids", async (req, res) => {
  try {
    // retrieve files from db
    const kidsFiles = await KidsFile.find({});

    // check if there are any event files
    if (kidsFiles.length === 0) {
      return;
    }

    // create an array to store images
    const imagesArray = [];

    // Iterate over each event file
    kidsFiles.forEach((eventFile) => {
      // Push image data to the array
      imagesArray.push({
        filename: eventFile.filename,
        contentType: eventFile.contentType,
        data: eventFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(imagesArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/display-all-videos", async (req, res) => {
  try {
    // retrieve files from db
    const videoFiles = await Videos.find({});

    // check if there are any event files
    if (videoFiles.length === 0) {
      return;
    }

    // create an array to store images
    const videoArray = [];

    // Iterate over each event file
    videoFiles.forEach((videoFile) => {
      // Push image data to the array
      videoArray.push({
        filename: videoFile.filename,
        contentType: videoFile.contentType,
        data: videoFile.data.toString("base64"), // Convert Buffer to base64 string
      });
    });

    // Send the array of image data to the client
    res.json(videoArray);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/send-otp", async (req, res) => {
  try {
    const otp = await sendOtpEmail("ifemediastudio@gmail.com");

    res.status(200).json(otp);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/creative-image", (req, res) => {
  res.sendFile(path.join(__dirname, "creative-image.html"));
});

app.get("/event-image", (req, res) => {
  res.sendFile(path.join(__dirname, "event-image.html"));
});

app.get("/frames-image", (req, res) => {
  res.sendFile(path.join(__dirname, "frames-image.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "gallery.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/kids-image", (req, res) => {
  res.sendFile(path.join(__dirname, "kids-image.html"));
});

app.get("/lifestyle-image", (req, res) => {
  res.sendFile(path.join(__dirname, "lifestyle-image.html"));
});

app.get("/photoshoot-image", (req, res) => {
  res.sendFile(path.join(__dirname, "photoshoot-image.html"));
});

app.get("/product-image", (req, res) => {
  res.sendFile(path.join(__dirname, "product-image.html"));
});

app.get("/traditional-potrait", (req, res) => {
  res.sendFile(path.join(__dirname, "traditional-potrait.html"));
});

app.get("/booking", (req, res) => {
  res.sendFile(path.join(__dirname, "booking.html"));
});

app.get("/videos", (req, res) => {
  res.sendFile(path.join(__dirname, "videos.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "services.html"));
});

// EJS

app.get("/ifeoluwa-dashboard", (req, res) => {
  res.render("admin-page");
});

app.get("/category-upload", (req, res) => {
  res.render("category-upload");
});

app.get("/category-delete", (req, res) => {
  res.render("category-delete");
});

app.get("/successful-del", (req, res) => {
  res.render("successful-del");
});

// UPLOAD ROUTES

app.get("/studio-upload", (req, res) => {
  res.render("upload-routes/studio-upload");
});

app.get("/event-upload", (req, res) => {
  res.render("upload-routes/event-upload");
});

app.get("/traditional-upload", (req, res) => {
  res.render("upload-routes/traditional-upload");
});

app.get("/creative-upload", (req, res) => {
  res.render("upload-routes/creative-upload");
});

app.get("/lifestyle-upload", (req, res) => {
  res.render("upload-routes/lifestyle-upload");
});

app.get("/product-upload", (req, res) => {
  res.render("upload-routes/product-upload");
});

app.get("/frames-upload", (req, res) => {
  res.render("upload-routes/frames-upload");
});

app.get("/kids-upload", (req, res) => {
  res.render("upload-routes/kids-upload");
});

app.get("/videos-upload", (req, res) => {
  res.render("upload-routes/videos-upload");
});
// END OF UPLOAD ROUTES

// DELETE ROUTES

app.delete("/delete-studio/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const studio = await StudioFile.findOneAndDelete({ filename: filename });

    if (!studio) {
      return res.status(404).send("Image not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-event/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const event = await EventFile.findOneAndDelete({ filename: filename });

    if (!event) {
      return res.status(404).send("Image not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-traditional/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const traditional = await TraditionalFile.findOneAndDelete({
      filename: filename,
    });

    if (!traditional) {
      return res.status(404).send("Image not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-creative/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const creative = await CreativeFile.findOneAndDelete({
      filename: filename,
    });

    if (!creative) {
      return res.status(404).send("Image not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-product/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const product = await ProductFile.findOneAndDelete({ filename: filename });

    if (!product) {
      return res.status(404).send("Image not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-frames/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const frames = await FramesFile.findOneAndDelete({ filename: filename });

    if (!frames) {
      return res.status(404).send("Images not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-kids/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const kids = await KidsFile.findOneAndDelete({ filename: filename });

    if (!kids) {
      return res.status(404).send("Video not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.delete("/delete-video/:filename", async (req, res) => {
  const filename = req.params.filename;

  try {
    const videos = await Videos.findOneAndDelete({ filename: filename });

    if (!videos) {
      return res.status(404).send("Video not found");
    }
  } catch (error) {
    console.error(error);
    res.status(404).send("Internal server error");
  }
});

app.get("/studio-delete", (req, res) => {
  res.render("delete-routes/studio-delete");
});

app.get("/event-delete", (req, res) => {
  res.render("delete-routes/event-delete");
});

app.get("/traditional-delete", (req, res) => {
  res.render("delete-routes/traditional-delete");
});

app.get("/creative-delete", (req, res) => {
  res.render("delete-routes/creative-delete");
});

app.get("/lifestyle-delete", (req, res) => {
  res.render("delete-routes/lifestyle-delete");
});

app.get("/product-delete", (req, res) => {
  res.render("delete-routes/product-delete");
});

app.get("/frames-delete", (req, res) => {
  res.render("delete-routes/frames-delete");
});

app.get("/kids-delete", (req, res) => {
  res.render("delete-routes/kids-delete");
});

app.get("/videos-delete", (req, res) => {
  res.render("delete-routes/videos-delete");
});
// END OF DELETE ROUTES

app.listen(PORT, (req, res) => {
  console.log("server running....");
});
