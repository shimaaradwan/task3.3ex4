
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10];
  const uniqueNumbers = removeDuplicates(numbers);
  document.getElementById("demo").innerHTML = removeDuplicates(numbers);
  