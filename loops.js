// FOR
let foods = ['apple', 'banana', 'orange', 'rice', '...']

// i <= foods.length - 1
for(let i = 0; i < foods.length; i++){
  if(foods[i] === 'banana'){
    console.log(foods[i], "🙉");
    //break;
  } 
  console.log(foods[i]);
}

for(let i = 10; i >= 0; i--){
  console.log(i);
}

// WHILE
let i = 10;
while(i >= 0){
  console.log(i);
  i--;
}

// DO WHILE
let j = 0;

do {
  console.log(j);
  j--;
} while(j > 0)


// TASK 1
let language = 'French';

if(language === "Spanish"){
  console.log('Hola mundo!');
} else if(language === "French"){
  console.log('Bonjour');
} else {
  console.log('Hello world!');
}

switch(language){
  case 'Spanish': {
    console.log('Hola mundo!');
    break;
  }
  case 'French': {
    console.log('Bonjour');
    break;
  }

  default: {
    console.log('Hello world!');
  }
}

// Even/Odd - Exercise
for(let i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
 
}

// 0 to 30 - Exercise
let k = 0;
while(k <= 30){
  if(k === 10){
    console.log('ten');
  } else if(k === 20){
    console.log('twenty')
  } else {
    console.log(k);
  }

  k++;
}