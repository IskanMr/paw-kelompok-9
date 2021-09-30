const perusahaan = require("../models/Perusahaan");

//get all data
exports.get = async (req, res) => {
  try {
    const Perusahaans = await perusahaan.find();
    res.json(Perusahaans);
  } catch (err) {
    res.json({ message: err });
  }
};

//find a data
exports.find = async (req, res) => {
  try {
    const Perusahaan = await perusahaan.findById(req.params.id);
    res.json(Perusahaan);
  } catch (err) {
    res.json({ message: err });
  }
};

//add a data
exports.add = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Data tidak boleh kosong" });
  }
  const { nama, umur, pegawai } = req.body;

  const Perusahaan = new perusahaan({
    nama,
    umur,
    pegawai,
  });

  console.log(nama, umur, pegawai);
  try {
    await Perusahaan.save();
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};

//update a data
exports.update = async (req, res) => {
  try {
    const updatedPerusahaan = await perusahaan.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );
    res.json(updatedPerusahaan);
  } catch (err) {
    res.json({ message: err });
  }
};

//delete a data
exports.delete = async (req, res) => {
  try {
    await perusahaan.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.json({ message: err });
  }
};