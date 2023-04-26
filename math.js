
// Retorna a soma dos itens em um array
export function add(numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

export function subtract(numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++) {
        result -= numbers[i];
    }
    return result;
}
