import express from "express"
// import router from "express"
import user from '../models/users'
const app = (express)
const router = express.Router()


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





export const createUser =  (req:any, res:any) => {
    console.log(req.body)
    res.send('work in progress')
}


export const getAllUser = (req:any, res:any) => {
    res.status(500).json({
        status: "error",
        message: "This route is not yet defined"
    })
}

export const getUser = (req:any, res:any) => {
    res.status(500).json({
        status: "error",
        message: "tjis route is not yet defined"
    })
}

export const updateUser = (req:any, res:any) => {
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined '
    })
}

export const deleteUser = (req:any, res:any) => {
    res.status(500).json({
        status: 'error',
        message: 'this route is not yet defined'        
    })
}

// export const usercontroller = {
//     createUser,
//     getAllUser,
//     getUser,
//     updateUser,
//     deleteUser
// };