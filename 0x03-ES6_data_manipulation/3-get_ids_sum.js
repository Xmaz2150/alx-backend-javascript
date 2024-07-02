const getStudentIdsSum = (studentList) => {
  const initialValue = 0;
  return studentList.reduce(
    (accumulator, student) => accumulator + student.id,
    initialValue,
  );
};

export default getStudentIdsSum;
