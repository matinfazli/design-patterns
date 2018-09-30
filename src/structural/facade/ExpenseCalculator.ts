import {Expense} from "./subsytems/Expense";

export class ExpenseCalculator {

    private readonly expenses: Expense[];

    constructor(expenses: Expense[]) {
        this.expenses = expenses || [];
    }

    private calculateExpense(days: number): number {
        return this.expenses.reduce((prevExpense, currExpense) => {
            return prevExpense + Math.round((currExpense.calculateExpense() / 30) * days);
        }, 0);
    }

    calculateDailyExpense(): number {
        return this.calculateExpense(1);
    }

    calculateMonthlyExpense(): number {
        return this.calculateExpense(30);
    }

    calculateYearlyExpense(): number {
        return this.calculateExpense(365);
    }

    calculateExpenseForDays(days: number) {
        return this.calculateExpense(days);
    }
}
