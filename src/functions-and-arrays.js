// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(numb1, numb2) {
  if (numb1 >= numb2) {
    return numb1;
  }

  return numb2;
}

// Iteration 2 | Find the Longest Word
const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function findLongestWord(arrOfWords) {
  if (arrOfWords.length === 0) {
    return null;
  }
  // let longestWord = {name:"", count: 0};
  let longestWord2 = '';
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > longestWord2.length) {
      longestWord2 = arrOfWords[i];
    }
    // if(arrOfWords[i].length > longestWord.name.length){
    //     longestWord.name = arrOfWords[i];
    //     longestWord.count = arrOfWords[i].length
    // }
  }
  return longestWord2;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbs) {
  // return numbs.reduce((total, currNumb) => total + currNumb, 0);

  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    sum += numbs[i];
  }

  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numAvg) {
  if (numAvg.length === 0) {
    return 0;
  }

  // const avg = numAvg.reduce((total, currNumb) => total + currNumb, 0) / numAvg.length;
  // return avg;

  let sum = 0;
  for (let i = 0; i < numAvg.length; i++) {
    sum += numAvg[i];
  }

  const avg = sum / numAvg.length;
  return avg;
}

// Iteration 5 | Find Elements
const words2 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience',
];

function doesWordExist(arrOfWords, targetElement) {
    if(arrOfWords.length === 0){
        return null;
    }
    if(targetElement.length === 0){
        return null;
    }
    
    if(arrOfWords.includes(targetElement)){
        return true;
    }
    return false;
}
