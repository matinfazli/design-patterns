import {CompanyEntity} from "./CompanyEntity";
import {Department} from "./Department";
import {Employee} from "./Employee";

class Main {

    private company: CompanyEntity;

    constructor() {
        this.company = this.createNewDepartment('new-company');

        const engineering: CompanyEntity = this.createNewDepartment('engineering', this.company);

        this.addNewEmployeeToDepartment('john', 3000, engineering);
        this.addNewEmployeeToDepartment('jack', 4000, engineering);
        this.addNewEmployeeToDepartment('joe', 2000, engineering);

        console.log('payable salary is', this.company.getSalary());
    }

    createNewDepartment(name: string, parentDepartment?: CompanyEntity): CompanyEntity {
        const newDepartment: CompanyEntity = new Department();

        if (parentDepartment) {
            parentDepartment.addEntity(newDepartment);
        }

        return newDepartment;
    }

    addNewEmployeeToDepartment(name: string, salary: number, department: CompanyEntity): void {
        department.addEntity(new Employee(salary));
    }

}

new Main();
