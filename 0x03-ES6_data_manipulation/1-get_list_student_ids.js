const getListStudentIds = (studentList) => {
  function objToOneKey(obj) {
    return obj.id;
  }

  if (studentList.constructor === Array) {
    return studentList.map(objToOneKey);
  }
  return [];
};

export default getListStudentIds;
