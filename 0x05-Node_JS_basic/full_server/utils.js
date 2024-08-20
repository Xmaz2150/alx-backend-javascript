const fs = require('fs').promises;

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
  infoStr.push(`${field}`);

  let i = 0;
  const tempInfo = []
  for (; i < students.length - 1; i += 1) {
    tempInfo.push(`${students[i]}`);
  }
  tempInfo.push(`${students[i]}`);
  infoStr.push(tempInfo);
  return infoStr;
};

const readDatabase = async (filePath) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const cData = cleanData(data.split(/\r?\n/).slice(1));

      const fields = [...new Set(cData.map((str) => str.split(',')[3]))];

      const info = {};
      for (const field of fields) {
        const res = logStudentsByField(field, cData);
        info[res[0]] = res[1];
      }
      resolve(info);
    } catch (error) {
      reject(error);
    }
  });
}

export default readDatabase;
