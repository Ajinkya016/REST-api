const express = require('express');
const Student = require('../models/students');
//create router 
const router = new express.Router();

//Define the routes

// Create new students - POST 
/* 
Promice method 
router.post("/students", (req, res) => {
    console.info(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user)
    }).catch(e => {
        res.status(400).send(e)
    });
});

*/
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

//read the data of registerd students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(201).send(studentsData);

    } catch (e) {
        res.status(400).send(e);
    }
});

//get the indivisual student data usind userID

router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData){
              res.status(404).send();
        }else{
           res.status(201).send(studentData); 
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

//Update the students by ID

router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const UpdateData = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        if(!UpdateData){
              res.status(404).send();
        }else{
           res.status(201).send(UpdateData); 
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findByIdAndDelete(_id);
        if(!studentData){
              res.status(404).send();
        }else{
           res.status(201).send(studentsData); 
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;