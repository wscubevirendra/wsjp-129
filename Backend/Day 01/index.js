import express from "express"
const server = express();
const students = [
  {
    id: 1,
    name: "Virendra Singh",
    age: 22,
    gender: "Male",
    course: "MERN Stack",
    email: "virendra@gmail.com",
    phone: "9876543210",
    city: "Jaipur",
    marks: 89,
    isActive: true
  },
  {
    id: 2,
    name: "Anjali Sharma",
    age: 21,
    gender: "Female",
    course: "Python",
    email: "anjali@gmail.com",
    phone: "9876543211",
    city: "Delhi",
    marks: 92,
    isActive: true
  },
  {
    id: 3,
    name: "Rahul Verma",
    age: 23,
    gender: "Male",
    course: "Java",
    email: "rahul@gmail.com",
    phone: "9876543212",
    city: "Mumbai",
    marks: 76,
    isActive: false
  },
  {
    id: 4,
    name: "Priya Gupta",
    age: 20,
    gender: "Female",
    course: "React",
    email: "priya@gmail.com",
    phone: "9876543213",
    city: "Pune",
    marks: 95,
    isActive: true
  },
  {
    id: 5,
    name: "Amit Kumar",
    age: 24,
    gender: "Male",
    course: "Node.js",
    email: "amit@gmail.com",
    phone: "9876543214",
    city: "Lucknow",
    marks: 81,
    isActive: true
  },
  {
    id: 6,
    name: "Sneha Jain",
    age: 22,
    gender: "Female",
    course: "Next.js",
    email: "sneha@gmail.com",
    phone: "9876543215",
    city: "Indore",
    marks: 88,
    isActive: false
  },
  {
    id: 7,
    name: "Rohit Meena",
    age: 23,
    gender: "Male",
    course: "MongoDB",
    email: "rohit@gmail.com",
    phone: "9876543216",
    city: "Kota",
    marks: 73,
    isActive: true
  },
  {
    id: 8,
    name: "Neha Singh",
    age: 21,
    gender: "Female",
    course: "Express.js",
    email: "neha@gmail.com",
    phone: "9876543217",
    city: "Bhopal",
    marks: 90,
    isActive: true
  },
  {
    id: 9,
    name: "Karan Joshi",
    age: 25,
    gender: "Male",
    course: "Full Stack",
    email: "karan@gmail.com",
    phone: "9876543218",
    city: "Ahmedabad",
    marks: 84,
    isActive: true
  },
  {
    id: 10,
    name: "Pooja Yadav",
    age: 22,
    gender: "Female",
    course: "Data Science",
    email: "pooja@gmail.com",
    phone: "9876543219",
    city: "Jaipur",
    marks: 97,
    isActive: true
  }
];

server.listen(5000, () => {
    console.log("Server is running on port number 5000")
})

server.get("/student", (req, res) => {
    const query=req.query;
    let data=students
   if(query.id){
     data=students.find((st)=>st.id==query.id)
   }

if(query.city){
    data=students.filter((st)=>st.city==query.city)
}
    res.status(200).json({
        message:"Student Data find",
        data,
        total:students.length
    });
});





//    // console.log(req.path);         // /student/10
    // console.log(req.method);       // GET
    // console.log(req.url);          // /student/10?name=virendra
    // console.log(req.originalUrl);  // /student/10?name=virendra

    // console.log(req.params);       // { id: "10" }
    // console.log(req.query);        // { name: "virendra" }
    // console.log(req.body);         // POST/PUT data

    // console.log(req.headers);      // All request headers
    // console.log(req.cookies);      // Cookies (cookie-parser required)

    // console.log(req.hostname);     // localhost
    // console.log(req.ip);           // Client IP Address
    // console.log(req.protocol);     // http / https  
    // console.log(req.secure);       // true if https

    // console.log(req.baseUrl);      // Router base path
    // console.log(req.route);        // Current route info

    // console.log(req.files);        // Uploaded files (Multer)
    // console.log(req.file);         // Single uploaded file