//Nivel 2 
//Exercici 4
let printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        (() => console.log(numbers[i]))();
    }
  };
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  printNumbers(numbers);

  




