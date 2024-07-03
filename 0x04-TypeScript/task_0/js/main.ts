interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'Macy', lastName: 'Kahn', age: 27, location: 'Berlin' };
const student2: Student = { firstName: 'John', lastName: 'Doe', age: 23, location: 'FrankFurt' };

const studentList = [student1, student2];
const table = document.createElement('table');

const tr = document.createElement('tr');
for (const key in student1) {
  const th = document.createElement('th');
  th.textContent = key;
  tr.appendChild(th);
}
table.appendChild(tr);

studentList.forEach((student) => {
  const tr = document.createElement('tr');

  for (const key in student) {
    const td = document.createElement('td');
    td.textContent = student[key as keyof Student].toString();
    tr.appendChild(td);
  }
  table.appendChild(tr);
});

document.body.appendChild(table);

console.log(studentList);
