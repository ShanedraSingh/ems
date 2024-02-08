function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;

}

let employees = [
    new Employee("John", 30, "Marketing", 50000),
    new Employee("Alice", 35, "HR", 60000),
    new Employee("Bob", 28, "IT", 70000),
    new Employee("Emily", 32, "Marketing", 55000)
];

function displayOutput(output) {
    document.getElementById('output').innerHTML = output;
}

function calculateAverageSalary() {
    let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    let averageSalary = totalSalary / employees.length;
    displayOutput(`Average Salary: $${averageSalary.toFixed(2)}`);
}

function findEmployeesByDepartment(department) {
    let filteredEmployees = employees.filter(emp => emp.department === department);
    displayOutput(`Employees in ${department}: ${filteredEmployees.map(emp => emp.name).join(', ')}`);
}

function increaseSalary(percentage) {
    employees.forEach(emp => {
        emp.salary += emp.salary * (percentage / 100);
    });
    displayOutput('Salaries increased successfully!');
}

function sortEmployeesByAge() {
    employees.sort((a, b) => a.age - b.age);
    displayOutput(`Employees Sorted by Age: ${employees.map(emp => emp.name).join(', ')}`);
}
