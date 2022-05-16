// let info = {
//     name: "JavaScript"
// };

// function func(phrase) {
//     if(phrase) {
//         console.log(phrase + ' ' + this.name);
//     } else {
//         console.log(this.name)
//     };
// };

// let funcInfo = func.bind(info)
// funcInfo();
// funcInfo("Hello");


// const myFunc = function() {
//     console.log('Name: ' + this.name + ' Surname: ' + this.surname)
// };
// const ary = {
//     name: 'Petro',
//     surname: 'tilk'
// }
// myFunc.call(ary);

// const numbers = [1,2,3,4]
// const max = Math.max.apply(null, numbers)
// console.log(max)

// const numbers = [ 4,5,7,2]
// const min = Math.min.apply(1, numbers)
// console.log(min)


// function reverse() {
// const myFunc = function (){
// console.log( this.name + ' ' + this.surname)
//     nameFunc(this.name);
// };
// const any = {
//     name: 'Nadiya',
//     surname: 'Stepas'
// }
// myFunc.call(any);
// }

function nameFunc(name) { 
    console.log(name)
    let a = name.split('').reverse().join('');
    console.log(a, true)
    let nameFunc;
    for (let i = 0; i < name.length; i ++) {
    //   if(i === 0) {

      
        nameFunc = name.slice(1, name.length - i) + name[0] + name.substr(name.length - i); 
        console.log(nameFunc)
        // return nameFunc
    //   }
       
    }
    console.log(nameFunc)
    }



function reverse() {
    const myFunc = function (){
    console.log( this.name + ' ' + this.surname)
       nameFunc(this.name);
    };
    const any = {
        name: 'Nadiya',
        surname: 'Stepas'
    }
    myFunc.call(any);
    }
    
    function nameFunc(name) { 
    
        let nameFunc = [];
        // let a = name.slice(1, -1);
        // console.log(a);
        console.log(name.split(''));
    
        for (let i = 0; i < name.length; i++) { // second method
            nameFunc.push(name[i]);
        }
    
        let aga = [];
        for(let i = 0; i < nameFunc.length; i++) {
            if(i == 0) {
                continue;
            }
            else if(i === nameFunc.length-1) {
                continue;
            } else {
                aga.push(nameFunc[i])
            }
        }
            newRevers(aga.join(''));
        }
    
        function newRevers(str) {
            let res = '';
            for(let i = str.length - 1; i >= 0; i-- ) {
                res += str[i]
            }
            console.log(res);
        }
    