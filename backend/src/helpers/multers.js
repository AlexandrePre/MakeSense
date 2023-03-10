const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: (req, file, callBack) => {
    const ext = file.mimetype.split("/")[1];
    // je rename mon fichier
    const fileName = file.originalname.substring(
      0,
      file.originalname.lastIndexOf(".")
    );
    callBack(null, `${fileName}-${Date.now()}.${ext}`);
  },
});

// const upload = multer({ dest: "public/uploads"})

const upload = multer({ storage });

module.exports = { upload };
