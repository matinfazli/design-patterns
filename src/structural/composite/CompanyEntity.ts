export interface CompanyEntity {
    getSalary(): number;
    addEntity(entity: CompanyEntity): void;
    removeEntity(entity: CompanyEntity): void;
}
