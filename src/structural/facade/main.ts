import {Expense} from "./subsytems/Expense";
import {HomeExpense} from "./subsytems/HomeExpense";
import {FoodExpense} from "./subsytems/FoodExpense";
import {ExpenseCalculator} from "./ExpenseCalculator";

class Main {

    constructor() {
        const homeExpense: Expense = new HomeExpense(true, 600);
        const foodExpense: Expense = new FoodExpense(2, 6, 15);

        const expenseCalculator: ExpenseCalculator = new ExpenseCalculator([homeExpense, foodExpense]);

        console.log('total expense for 1 day: ', expenseCalculator.calculateDailyExpense());
        console.log('total expense for 1 month: ', expenseCalculator.calculateMonthlyExpense());
        console.log('total expense for 1 year: ', expenseCalculator.calculateYearlyExpense());
        console.log('total expense for 549 days: ', expenseCalculator.calculateExpenseForDays(549));
    }

}

new Main();
