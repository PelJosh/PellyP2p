import mongoose from "mongoose";
import { string } from "yargs";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: [true, "Enter your desired name"],
    minLength: 4,
    MacLength: 50,
  },
  email: {
    type: string,
    unique: true,
    lowercase: true,
    required: [true, "please provide email and password"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  password: {
    type: string,
    required: [true, "please provide email and password"],
    minLength: 8,
  },
  role: {
    type: string,
    enum: ["admin", "user"],
    default: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.methods.hashpassword = async function (password: string) {
//   const saltRounds = 10;
//   const salt = await bcrypt.genSalt(saltRounds);

//   return await bcrypt.hash(password, salt);
// };

// userSchema.methods.validatePassword = async function (userpassword: string) {
//   return await bcrypt.compare(userpassword, this.password);
// };

const user = mongoose.model('user', userSchema);

export default user;

// bcrypt.hash('password', 10, function(err, hash){

// })
