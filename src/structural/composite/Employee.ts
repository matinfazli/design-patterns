import {CompanyEntity} from "./CompanyEntity";

export class Employee implements CompanyEntity {

    private salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

    addEntity(entity: CompanyEntity): void {
        return;
    }

    removeEntity(entity: CompanyEntity): void {
        return;
    }

}
