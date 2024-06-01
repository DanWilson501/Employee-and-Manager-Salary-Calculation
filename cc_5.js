// U5223-1368

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }

    employeeDetails() {
        console.log(`Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        this.bonusPercentage = 0.15;
    }

    annualSalary() {
        const baseAnnualSalary = super.annualSalary();
        const bonus = baseAnnualSalary * this.bonusPercentage;
        return baseAnnualSalary + bonus;
    }

    employeeDetails() {
        super.employeeDetails();
        console.log(`Department: ${this.department}`);
    }
}

// Test Data 1 & 2
const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
const manager2 = new Manager('Debbie Little', 7205, 'Finance');

console.log(`Manager 1`);
manager1.employeeDetails();
console.log(`Annual Salary including Bonus: ${manager1.annualSalary()}`);

console.log(`Manager 2`);
manager2.employeeDetails();
console.log(`Annual Salary including Bonus: ${manager2.annualSalary()}`);

// To display output above, open the html file in a browser and view through right click -> inspect -> console.