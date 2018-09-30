import {Expense} from "./Expense";

export class HomeExpense implements Expense {

    private readonly isWorking: boolean;
    private readonly rent: number;

    constructor(isWorking: boolean, rent: number) {
        this.isWorking = isWorking;
        this.rent = rent;
    }

    private calculateExpenseBasedOnBeingHome(minExpense: number, maxExpense: number): number {
        const daysAtHome =  this.isWorking ? 30 - 22 : 30;
        const expensePerDay: number = (maxExpense + minExpense) / 2 / 30;
        return (expensePerDay * daysAtHome) + ((expensePerDay / 2) * (30 - daysAtHome));
    }

    private calculateUtilityExpense(): number {
        return this.calculateExpenseBasedOnBeingHome(28, 40);
    }

    private calculateGroceryExpense(): number {
        return this.calculateExpenseBasedOnBeingHome(15, 50);
    }

    calculateExpense(): number {
        const utilityExpense: number = this.calculateUtilityExpense();
        const groceryExpense: number = this.calculateGroceryExpense();
        return this.rent + utilityExpense + groceryExpense;
    }
}
