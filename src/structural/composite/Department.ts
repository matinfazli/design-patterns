import {CompanyEntity} from "./CompanyEntity";

export class Department implements CompanyEntity {

    private childEntities: CompanyEntity[];

    constructor() {
        this.childEntities = [];
    }

    getSalary(): number {
        return this.childEntities
            .map((entity) => entity.getSalary())
            .reduce((previousSalary, currentSalary) => previousSalary + currentSalary, 0);
    }

    addEntity(entity: CompanyEntity): void {
        this.childEntities = [...this.childEntities, entity];
    }

    removeEntity(entity: CompanyEntity): void {
    }

}
