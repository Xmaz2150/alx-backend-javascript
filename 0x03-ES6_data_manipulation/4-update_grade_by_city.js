const updateStudentGradeByCity = (studentList, city, newGrades) => {
  if (studentList.constructor === Array && newGrades.constructor === Array) {
    const studentsInCity = studentList.filter((student) => student.location === city);

    const updatedStudents = studentsInCity.map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      if (gradeObj) {
        return { ...student, grade: gradeObj.grade };
      }
      return { ...student, grade: 'N/A' };
    });

    return updatedStudents;
  }
  return [];
};

export default updateStudentGradeByCity;
