"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUser = exports.createUser = void 0;
const express_1 = __importDefault(require("express"));
const app = (express_1.default);
const router = express_1.default.Router();
// router.post('/signup',  async(req, res) => {
//     const newUser = new user ({
//         name: req.body.naame,
//         email: req.body.email
//     })
//     const userpassword = await newUser.hashpassword(req.body.password)
//     newUser.password = userpassword
//     await newUser.save();
//     return  res.status(201).json({
//         message: "user created succesfully."
//     })
// } )
const createUser = (req, res) => {
    console.log(req.body);
    res.send('work in progress');
};
exports.createUser = createUser;
const getAllUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined"
    });
};
exports.getAllUser = getAllUser;
const getUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "tjis route is not yet defined"
    });
};
exports.getUser = getUser;
const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined '
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined'
    });
};
exports.deleteUser = deleteUser;
// export const usercontroller = {
//     createUser,
//     getAllUser,
//     getUser,
//     updateUser,
//     deleteUser
// };
