const { readFile } = require('fs/promises');

const log = process.stdout;

const cleanData = (data) => {
  for (let i = data.length - 1; i >= 0; i -= 1) {
    if (data[i] === '' || data[i] === undefined) {
      data.splice(i, 1);
    }
  }
  return data;
};

const logStudentsByField = (field, cData) => {
  const students = cleanData(cData.map((str) => {
    if (str.split(',')[3] === field) {
      return str.split(',')[0];
    }
    return undefined;
  }));
  const infoStr = [];
  infoStr.push(`Number of students in ${field}: ${students.length}. List:`);

  let i = 0;
  for (; i < students.length - 1; i += 1) {
    infoStr.push(`${students[i]},`);
  }
  infoStr.push(`${students[i]}`);
  return infoStr.join(' ');
};

const countStudents = (path) => {
  return readFile(path, { encoding: 'utf-8' })
    .then((data) => {
      const cData = cleanData(data.split(/\r?\n/).slice(1));

      const fields = [...new Set(cData.map((str) => str.split(',')[3]))];
      const info = [`Number of students: ${cData.length}`];
      for (const field of fields) {
        info.push(logStudentsByField(field, cData));
      }
      const studentStats = info.join('\n');
      log.write(`${studentStats}\n`);
      return studentStats;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
};

module.exports = countStudents;
