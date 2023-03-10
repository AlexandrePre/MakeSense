// middleware de check d'image
// si j'ai pas l'image j'arrete et je renvoie un message d'erreur
// si c'est pas un fichier image je renvoie un message d'erreur
const checkImage = (req, res, next) => {
  if (!req.file) {
    return res.status(404).send({ msg: "No file upload" });
  }
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    return res.status(404).send({
      msg: "Only image files (jpg, jpeg, png) are allowed!",
    });
  }

  return next();
};

module.exports = {
  checkImage,
};
