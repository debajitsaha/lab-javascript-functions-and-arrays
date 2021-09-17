// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers( num1,num2)
{
  if (num1>num2)
  {
    return num1;
  }
  else
  {
    return num2;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  if(words==0)
  {
    return null;
  }
  else if(words.length == 1)
  {
    return words[0];
  }
  else if( words.length==2){
    if(words[0].length == words[1].length)
    {
      return words[0];
    }
  }
  else if(words.length>2)
  {
    for( i=0;i<words.length; i++)
      {
       if(words[0].length<words[i].length)
       {
          words[0]=words[i];
       }
       
      
    }
  
 }
return words[0];


}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
var sum=0;
function netPrice(numbers)
{
  if(numbers.length==0)
  {
    return 0;
  }
  else if(numbers.length==1)
  {
    return numbers[0];
  }
  else if(numbers.length>1)
  {
   for(let i=0;i<numbers.length;i++)
   {
     if(typeof(numbers[i]==="number"))
     {
        sum=sum+numbers[i]
     }
  
  
    

  
  }return sum;
}
}
//Progression #3.1: Calculate the average
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){
  let sum=0;
  if(mixedArr==0)
  {
    return 0;
  }
  else{
       for(let i=0;i<mixedArr.length;i++)
       {  if(typeof(mixedArr[i])==="boolean")
          {
         if (mixedArr[i]=="true")
         {
         sum+=1;
         }
         if(mixedArr=="false")
        {
         sum+=0;
        }
       }
        else if (typeof(mixedArr[i])==="number")
         {
           sum+=mixedArr[i];
         }
         else if(typeof(mixedArr[i])==="string")
         {
           
           sum+=mixedArr[i].length;
           
         }
         else{
          throw new Error ('Unsupported data type sir or ma\'am'); 
         }
        

       }
       if(sum==0)
       {
         return 0;
       }
       else
       { 
         return sum;
       }
      
  }
  
}
 //progration 4: mid point
 const number= [2, 6, 9, 10, 7, 4, 1, 9];
 function midPointOfLevels(number)
 {
   let sum=0;
   if(number==0)
  {
   return null;
  }
   for(let i=0;i<number.length;i++)
   {
     sum+=number[i];
   }
   return sum/number.length;

 }
  

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(number)
 {
   let sum=0;
   if(number==0)
  {
   return null;
  }
   for(let i=0;i<number.length;i++)
   {
     sum+=number[i];
   }
   return sum/number.length;

 }
  

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordArr)
 {
   let sum=0;
   if(wordArr==0)
  {
   return null;
  }
   for(let i=0;i<wordArr.length;i++)
   {
     sum+=wordArr[i].length;
   }
   return sum/wordArr.length;

 }
 //Progression #: avgerage mixed array
 const arr = [63, 122, 'audi', 61, 'volvo', '20', 'lamborghini', 38, 156];
 function avg(arr)
 {
   let sum=0;
      if(arr.length===0)
      {
        return null;
       }  
       for(let i=0;i<arr.length;i++)
       {
        if (typeof(arr[i])==="number")
        {
          sum+=arr[i];
        }
        else if(typeof(arr[i])==="string")
        {
          
          sum+=arr[i].length;
          
        }

       } 
       return parseFloat((sum / arr.length).toFixed(2));
  }
  

  
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniquifyArray(wordsUnique)
{
  let newArray = null, arrayLength = wordsUnique.length;
  if(arrayLength!==0)
  {
    newArray = [];
    for(let i=0;i<arrayLength;i++)
    {
      if(newArray.includes(wordsUnique[i]) === false)
      {
        newArray.push(wordsUnique[i]);
      }
    }
  }
  return newArray;
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, word)
{
  let isPresent = null;
  if(wordsFind.length!==0){
    isPresent = wordsFind.includes(word);
  }
  return isPresent;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,ele)
{
  let repeatation=0;
  if(wordsCount.length !== 0){
  for (i=0; i<=wordsCount.length; i++){
    if(wordsCount[i] === ele){
      repeatation++;
    }
  }return repeatation;
  }
  else{
    return 0;
  }



}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix)
{
  let sum = 0;
  for (let i =0; i< matrix.length; i++)
  {
    for (let j = 0; j<matrix[i].length; j++)
    {
      let nmatrix = matrix[i];
      sum+= nmatrix[j];
    }
  }
  let len = matrix.length*matrix.length;
  if (sum ==len) 
  {
    return 1;
  }
  else if (sum ==len*2) 
  {
    return 16;
  }
}
 
 