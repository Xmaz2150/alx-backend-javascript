const getStudentsByLocation = (studentList, city) => {
  if (studentList.constructor === Array && typeof city === 'string') {
    return studentList.filter((obj) => obj.location === city);
  }
  return [];
};

export default getStudentsByLocation;
