const { sendErrorResponse } = require("../helpers/send_error_response");
const adminShcema = require("../schemas/Admin");
const { adminValidation } = require("../validation/admin.validation");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const conifg = require('config')

const create = async (req, res) => {
  try {
    const { error, value } = adminValidation(req.body);

    if (error) {
      return sendErrorResponse(error, res);
    }

    const hashedPassword = bcrypt.hashSync(value.password, 7);
    const newAdmin = await adminShcema.create({
      ...value,
      password: hashedPassword,
    });
    res.status(201).send({ message: "New Admin added", newAdmin }); //newAuthor
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminShcema.findOne({ email });

    if (!admin) {
      return res.status(401).send({ message: "Email yoki password noto'g'ri" });
    }

    const validPassword = bcrypt.compareSync(password, admin.password);

    if (!validPassword) {
      return res.status(401).send({ message: "Email yoki password noto'g'ri" });
    }

    const payload = {
      id: admin.id,
      email: admin.email,
      is_creator: admin.is_creator,
    };

    const token = jwt.sign(payload, conifg.get("adminKey"), {
      expiresIn: conifg.get("adminExpTime"),
    });

    res
      .status(201)
      .send({ message: " Logged in succefully", id: adminShcema.id, token}); //
  } catch (error) {
    console.log(error);
    sendErrorResponse(error, res);
  }
};

const findAll = async (req, res) => {
  try {
    const admins = await adminShcema.find();
    res.status(201).send({ admins });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const findById = async (req, res) => {
  let { id } = req.params;
  try {
    const data = await adminShcema.findById(id);
    res.status(201).send({ data: data });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const upadate = async (req, res) => {
  let { id } = req.params;
  let data = req.body;
  try {
    const { error, value } = adminValidation(data);

    if (error) {
      return sendErrorResponse(error, res);
    }

    const patchValue = await adminShcema.findByIdAndUpdate(id, value);
    res.status(201).send({ message: "Updated successfully", patchValue });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const remove = async (req, res) => {
  let { id } = req.params;
  try {
    await adminShcema.findByIdAndDelete(id);
    res.status(201).send({ message: "Admin deleted" });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

module.exports = {
  login,
  findAll,
  create,
  findById,
  upadate,
  remove,
};
