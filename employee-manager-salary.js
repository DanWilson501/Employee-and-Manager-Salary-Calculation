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