export const BODYVALIDATION = (req, res, next) => {
  if (req.body.nickname === "" || !req.body.nickname) {
    return res.status(401).json({
      message: "Necesita de un nickname con el que puedan identificarle",
    });
  } else if (req.body.email === "" || !req.body.email) {
    return res.status(401).json({
      message: "Requerimos un email para poder comunicarle",
    });
  } else if (req.body.Phonenumber === "" || !req.body.Phonenumber) {
    return res.status(401).json({
      message: "Requerimos un número de telófono para poder comunicarle",
    });
  } else if (req.body.onlyfanslink === "" || !req.body.onlyfanslink) {
    return res.status(401).json({
      message: "Necesitamos su onlyfans para poder promocionarle",
    });
  } else if (req.body.instagramlink === "" || !req.body.instagramlink) {
    return res.status(401).json({
      message: "Necesitamos su instagram para poder promocionarle",
    });
  } else if (req.body.tiktoklink === "" || !req.body.tiktoklink) {
    return res.status(401).json({
      message: "Necesitamos su tiktok para poder promocionarle",
    });
  } else if (req.body.nacionality === "" || !req.body.nacionality) {
    return res.status(401).json({
      message: "Queremos saber su nacionalidad",
    });
  } else {
    next();
  }
};

export const FIELDLONGVALIDATION = (req, res, next) => {
  if (req.body.nickname && req.body.nickname.length < 5)
    return res
      .status(401)
      .json({ message: "Su nickname es demasionado corto" });
  else if (req.body.Phonenumber && req.body.Phonenumber.length <= 9) {
    res
      .status(401)
      .json({ message: "El número proporcionado es demasiado corto" });
  } else {
    next();
  }
};
