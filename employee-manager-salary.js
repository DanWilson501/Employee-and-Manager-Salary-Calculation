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