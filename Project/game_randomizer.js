function game() {

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let aga = getRandomInt(10);
  console.log(aga);

 
//  console.log(info);

 let i = 3;
   while(i > 0) {
    let info = prompt ('введіть рандомне число від 0 до 9, у вас є ' + i + ' життя');
     if (info != aga){
         console.log(false)
         i--;
     } else {
        console.log(true)
        break;
     }
    }
    if(i === 0) {
        alert('Game is End! You lose');
    }
};
