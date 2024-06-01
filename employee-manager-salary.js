// U5223-1368

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
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
}

const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
const manager2 = new Manager('Debbie Little', 7205, 'Finance');

console.log(`Manager 1`);
console.log(`Name: ${manager1.name}, Monthly Salary: ${manager1.salary} Department: ${manager1.department}\n Annual Salary: ${manager1.annualSalary()}`);

console.log(`Manager 2`);
console.log(`Name: ${manager2.name}, Monthly Salary: ${manager2.salary} Department: ${manager2.department}\n Annual Salary: ${manager2.annualSalary()}`);