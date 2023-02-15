let city = 'miami';
// console.log(city);
city[0] = 'M'
// console.log(city);
city = 'Madrid';
// console.log(city)

let age = 19;
let hasFalseDNI = true;
let imDrunk = true;


// if(age >= 18 || (hasFalseDNI === true && age >= 16)){
//   console.log('20€ dos copas');
//   if(imDrunk === true){
//     console.log('Lo mejor es irse a casa');
//   } else {
//     console.log('Adelante, disfruta 🔥');
//   }
// } else if(age >= 14){
//   console.log('Disfruta de la sesión light hasta las 22h');
// } else {
//   console.log('No puedes entrar en la discoteca');
// }


switch(age){
  case 18: {
    console.log('20€ dos copas');
    if(imDrunk === true){
      console.log('Lo mejor es irse a casa');
    } else {
      console.log('Adelante, disfruta 🔥');
    }
    break;
  }

  case 16: {
    console.log('Disfruta de la sesión light');
    break;
  }

  default: {
    console.log('No puedes entrar en la discoteca');
  }
}