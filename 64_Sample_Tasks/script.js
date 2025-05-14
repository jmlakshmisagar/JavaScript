function calculateCaloriesBurned(array) {
    let totalCalories = 0;
    for (let i = 0; i < array.length; i++) {
        totalCalories += array[i].calories;
    }
    return totalCalories;
}


console.log(calculateCaloriesBurned([100, 150, 200]));