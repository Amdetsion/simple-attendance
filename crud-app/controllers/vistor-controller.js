const Vistor = require("../model/Vistor");
const jwt = require("jsonwebtoken");
const getAllVistor = async (req, res, next) => {
    let vistors;
    try {
        vistors = await Vistor.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!vistors) {
      return res.status(404).json({ message: "No vistor  found" });
    }
    return res.status(200).json({vistors });
  };
  const getById = async (req, res, next) => {
    const id = req.params.id;
    let vistor;
    try {
        vistor = await Vistor.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (! vistor) {
      return res.status(404).json({ message: "No pussy found" });
    }
    return res.status(200).json({  vistor });
  };
  const addVistor = async (req, res, next) => {
    const {  vistorFname,vistorLname,phonNumber, email,gender } = req.body;
    let vistor;
    try {
        vistor = new Vistor({
            vistorFname,
            vistorLname,
            phonNumber, 
            email,
            gender
      });
      await  vistor.save();
    } catch (err) {
      console.log(err);
    }
  
    if (! vistor) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({  vistor });
  };
  const updateVistor = async (req, res, next) => {
    const id = req.params.id;
    const { vistorFname,vistorLname,phonNumber, email,gender } = req.body;
    let vistor;
    try {
        vistor = await Vistor.findByIdAndUpdate(id, {
            vistorFname,
            vistorLname,
            phonNumber, 
            email,gender
      });
      vistor = await vistor.save();
    } catch (err) {
      console.log(err);
    }
    if (!vistor) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ vistor });
  };

  const deleteVistor = async (req, res, next) => {
    const id = req.params.id;
    let vistor;
    try {
        vistor = await Vistor.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!vistor) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };
 
  exports. getAllVistor =  getAllVistor;
  exports. getById =  getById;
  exports. addVistor =  addVistor;
  exports. updateVistor = updateVistor;
  exports. deleteVistor = deleteVistor;
  