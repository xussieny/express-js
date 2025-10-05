// create routes for student entity
const express = require('express');
const router = express.Router();
const Student = require('../models/Students');
// get all students
router.get('/', async (req, res)=>{
    try{
        const students =await Student.find();
        res.json(students);    
    }catch(error){
        res.status(500).json({message: error.message})
    }
});
 //create a new student
 router.post("/", async (req, res) => {
    const { name, age, email } = req.body;

    try {
        const student = new Student({ name, age, email });
        const saved = await student.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//  update a student
router.put('/:id', async(req, res)=>{
    try{
const student =await Student.findByIdAndUpdate(req.params.id,
    req.body,
    {new:true,}
);
res.json(student)
    }catch(error){
        res.status(404).json({message: error.message});
    }
});



//delete student
router.delete('/:id', async (req, res )=>{
    try {
    //   new students =await  Student.findByIdAndDelete(req.params.id, req.body);
        await Student.findByIdAndDelete(req.params.id);
      res.json({message: "Student deleted successfully"});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
module.exports = router;