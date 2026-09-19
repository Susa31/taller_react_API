import type { MealResponse } from "../types/api";

const baseURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

export const listMeals = async () => {
    const response = await fetch(baseURL);
    const data: MealResponse = await response.json();
    return data;
}
