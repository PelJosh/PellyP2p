"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const yargs_1 = require("yargs");
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: yargs_1.string,
        required: [true, "Enter your desired name"],
        minLength: 4,
        MacLength: 50,
    },
    email: {
        type: yargs_1.string,
        unique: true,
        lowercase: true,
        required: [true, "please provide email and password"],
        validate: {
            validator: validator_1.default.isEmail,
            message: "Please provide valid email",
        },
    },
    password: {
        type: yargs_1.string,
        required: [true, "please provide email and password"],
        minLength: 8,
    },
    role: {
        type: yargs_1.string,
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
const user = mongoose_1.default.model('user', userSchema);
exports.default = user;
// bcrypt.hash('password', 10, function(err, hash){
// })
