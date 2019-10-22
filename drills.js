'strict mode'

function max(numbers) {
    let maxNum = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        i++;
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}

function min(numbers) {
    let maxNum = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        i++;
        if (numbers[i] < maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;

}

console.log(max([-5, 28, 98, -20013, 0.7878, 22, 115]));

console.log(min([-5, 28, 98, -20013, 0.7878, 22, 115]));


function average(numbers) {
    let sum = 0;
  
    numbers.forEach(number => (sum += number));
  
    return sum / numbers.length;
  }