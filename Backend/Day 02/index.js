import express from 'express';
import mongoose from 'mongoose';

const server = express();
server.use(express.json());


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true
    },
    email: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        default: 20,
    },
    status: {
        type: Boolean,
        default: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    }
})

const StudentModel = mongoose.model("students", studentSchema);


server.post("/student/create", async (req, res) => {
    try {

        const student = await StudentModel.findOne({ email: req.body.email });
       if(student){
        return res.status(409).json({
            message:'Data already exist',
            success:false
        })
       }


        StudentModel.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            gender: req.body.gender
        })

        res.status(201).json({
            message: "Student data create",
            success: true
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })

    }

})


server.get("/student", async(req,res)=>{
try {
    const students=await  StudentModel.find();
    res.status(200).json({
        message:"Student find",
        success:true,
        students
    })

    
} catch (error) {
    
}
})



mongoose.connect("mongodb://localhost:27017/collage").then(
    () => {
        server.listen(5000, () => {
            console.log("Server running port number 5000")
        })
        console.log("Database connected")
    }
).catch(
    () => {
        console.log("Databse not connected")
    }
)