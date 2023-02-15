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