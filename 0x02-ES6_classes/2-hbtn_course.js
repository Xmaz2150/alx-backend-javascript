class HolbertonCourse {

  constructor(name = "", length = 0, students = []) {
    if (typeof name !== "string") {
      throw TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw TypeError("Length must be a number");
    }
    if (typeof students !== "object") {
      throw TypeError("Students must be an array");
    }
    for (const student of students) {
      if (typeof student !== "string") {
        throw TypeError("Student must be a string");
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name = "") {
    if (typeof name !== "string") {
      throw TypeError("Name must be a string");
    }
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set length(length = 0) {
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = length;
  }
  get length() {
    return this._length;
  }

  set students(students = []) {
    if (typeof students !== "object") {
      throw TypeError("Students must be an array");
    }
    for (const student of students) {
      if (typeof student !== "string") {
        throw TypeError("Student must be a string");
      }
    }
    this._students = students;
  }
  get students() {
    return this._students;
  }
}
export default HolbertonCourse;
