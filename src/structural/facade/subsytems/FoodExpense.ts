import {Expense} from "./Expense";

export class FoodExpense implements Expense {

    private readonly outsideMealsPerDay: number;
    private readonly minPrice: number;
    private readonly maxPrice: number;

    constructor(outsideMealsPerDay: number, minPrice: number, maxPrice: number) {
        this.outsideMealsPerDay = outsideMealsPerDay;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }

    private calculateFoodExpenses(): number {
        return this.outsideMealsPerDay * ((this.maxPrice + this.minPrice) / 2) * 30;
    }

    calculateExpense(): number {
        return this.calculateFoodExpenses();
    }

}
