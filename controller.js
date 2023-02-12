const Pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    //pool.query("SELECT * FROM students2", (error, results) => {
    pool.query(queries.getStudents,(error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const {name, email, age} = req.body;
    pool.query(queries.checkEmailExists,[email], (error, results) => {
        if(results.rows.length){
            res.send("Email already exists in the system");
        }

        //add new student
        pool.query(queries.addStudent, [name, email, age], (error, results) => {
            if(error) throw error;
              res.status(201).send("Student Created Successfully");
        }
    );
  });
};

const updateStudent = (req, res) => {
    pool.query(queries.getStudentById,[id], (error, results) => {
        if(results.rows.length){
            res.send("Student is already in the system");
        }

        //update student
        pool.query(queries.updateStudent, new[name, email, age], (error, results) => {
            if(error) throw error;
              res.status(202).send("Student Updated Successfully");
        }
    );
  });
};

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id], (error, results) => {
        if(error) throw error;
        res.status(203).json(results.rows);
    });
};

        //delete student
        pool.query(queries.deleteStudent, delete[name, email, age], (error, results) => {
            if(error) throw error;
              res.status(203).send("Student Deleted Successfully");
});


module.exports = {
    getStudents, 
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
};