const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * from students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students2 s WHERE s.email = $1";
const addStudent = "INSERT INTO students2 (name,email,age) VALUES ($1,$2,$3)";
const updateStudent = "UPDATE * from students2 (name,email.age) VALUES ($1,$2,$3)";
const deleteStudent = "DELETE *"


module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    updateStudent,
    deleteStudent,
}