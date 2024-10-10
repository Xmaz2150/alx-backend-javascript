export default function* createIteratorObject(report) {
  const departments = report.allEmployees;

  for (const employees of Object.values(departments)) {
    for (const names of employees) {
      yield names;
    }
  }
}
