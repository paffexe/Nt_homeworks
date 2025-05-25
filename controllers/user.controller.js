const { sendErrorResponse } = require("../helpers/send_error_response");
const userSchema = require("../schemas/User");
const  userValidation  = require("../validation/user.validation");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('config')

const create = async (req, res) => {
  try {
    const { error, value } = userValidation(req.body);

    if (error) {
      return sendErrorResponse(error, res);
    }

    const hashedPassword = bcrypt.hashSync(value.password, 7);
    const newUser = await userSchema.create({
      ...value,
      password: hashedPassword,
    });
    res.status(201).send({ message: "New User added", newUser }); 
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "Email yoki password noto'g'ri" });
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(401).send({ message: "Email yoki password noto'g'ri" });
    }

    const payload = {
      id: user._id,
      email: user.email,
    }

    const token = jwt.sign(payload, config.get("userKey"), {
      expiresIn: config.get("userExpTime"),
    });

    res
      .status(201)
      .send({ message: " Logged in succefully", id: userSchema.id, token}); //
  } catch (error) {
    console.log(error);
    sendErrorResponse(error, res);
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userSchema.find();
    res.status(201).send({ users });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const findById = async (req, res) => {
  let { id } = req.params;
  try {
    const data = await userSchema.findById(id);
    res.status(201).send({ data: data });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const upadate = async (req, res) => {
  let { id } = req.params;
  let data = req.body;
  try {
    const { error, value } = userValidation(data);

    if (error) {
      return sendErrorResponse(error, res);
    }

    const patchValue = await userSchema.findByIdAndUpdate(id, value);
    res.status(201).send({ message: "Updated successfully", patchValue });
  } catch (error) {
    sendErrorResponse(error, res);
  }
};

const remove = async (req, res) => {
  let { id } = req.params;
  try {
    await userSchema.findByIdAndDelete(id);
    res.status(201).send({ message: "User deleted" });
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
  remove
};
