const { Router } = require('express');
const controller = require('./controller');


const router = Router();


router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentById); 
router.post('/', controller.addStudent);

//HOMEWORK
//router.post('/', controller.updateStudent);
//router.delete('/', controller.deleteStudent);

/*
router.get('/', (req, res) => {
    res.send("using api route")
});
*/

module.exports = router;