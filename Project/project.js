let globalData = [];
let curIndex = 0;

function toObject() {
  var form = document.querySelector('form');
  var formDatat = new FormData(form)
  var obj = {};
  const button = document.getElementById('but');

  for (let key of formDatat.keys()) {
    obj[key] = formDatat.get(key);
    if(obj.age) {

    }
  }
  console.log(obj);
  globalData.push(obj);
  console.log(globalData);

  globalData.map(val => val.age ? val.age : val.age = 'Not set');

  let firstName = document.getElementById('firstName').value;
  let secondName = document.getElementById('secondName').value;


  // if (firstName === "" && secondName === "") {
  //   document.getElementById("firstName").style.borderColor = "red";
  //   button.style.borderColor = "red";
  //   button.disabled = true;
  // } 

  // if (document.getElementById('age').value === "") {
  //   document.getElementById("age").style.borderColor = "red";
  //   button.style.borderColor = "red";
  //   button.disabled = true;
  // }
}


function checkTypeOfName() {
  const firstName = document.getElementById('firstName').value;
  const secondName = document.getElementById('secondName').value;
  const button = document.getElementById('but');
  var letters = /^[A-Za-z]+$/;
  if ((letters).test(firstName) && letters.test(secondName)) {
    document.getElementById("firstName").style.borderColor = "black";
    document.getElementById('secondName').style.borderColor = "black";
    button.style.borderColor = 'black';
    button.disabled = false;
  } else {
    console.log('Error');
    document.getElementById("firstName").style.borderColor = "red";
    document.getElementById("secondName").style.borderColor = "red";
    button.style.borderColor = "red";
    button.disabled = true;
  }

  // if ((letters).test(secondName)) {
  //   document.getElementById('secondName').style.borderColor = "black";
  //   button.style.borderColor = "black";
  //   button.disabled = false;
  // } else {
  //   console.log('Error');
  //   document.getElementById("secondName").style.borderColor = "red";
  //   button.style.borderColor = "red";
  //   button.disabled = true;
  // }
  
}

function CheckTypeOfAbonement() {
  const abonement = document.getElementById('type_of_abonement').value;
  const button = document.getElementById('but');

  if (abonement === "") {
    document.getElementById("type_of_abonement").style.borderColor = "red";
    button.style.borderColor = "red";
    button.disabled = true;
  }
}


// function checkTypeOfSecondName () {
//   const secondName = document.getElementById('secondName').value;
//   const button = document.getElementById('but');

//   if(isNaN(Number(secondName))) {
//     document.getElementById('secondName').style.borderColor = "black";
//     button.style.borderColor = "black";
//     button.disabled=false;
//   } else {
//     console.log("Error")
//     document.getElementById('secondName').style.borderColor = "red";
//     button.style.borderColor = "red";
//     button.disabled = true;
//   }
// }

function checkTypeOfAge() {
  const age = document.getElementById('age').value;
  const button = document.getElementById('but');
  console.log(typeof age);
  if (isNaN(Number(age))) {
    console.log('Error');
    document.getElementById("age").style.borderColor = "red";
    button.style.borderColor = 'red';
    button.disabled = true;
  } else {
    document.getElementById("age").style.borderColor = "black";
    button.style.borderColor = 'black';
    button.disabled = false;
  }

}

// Функція виводу всіх клієнтів
function showAllClients() {
  const div = document.createElement('div');
  const outputedData = document.getElementsByTagName('span');

  for (key of globalData) {
    let arrayIndex = globalData.indexOf(key);
    div.innerHTML += `    <form name="data" id="${generateRowId()}">
            <p>Client ${arrayIndex + 1}: ${key.firstName}</p>
            <div class="first_name_case" onclick="changeStatusOfInput(${arrayIndex}); return false">
              <label for="first_name">First name</label>
              <input type="text" disabled class="in" value="${key.firstName}" id="firstName_${generateFormRowId()}"> 
            </div>
            <div class="second_name_case" onclick="changeStatusOfInput(${arrayIndex})>
              <label for="second_name">Second name</label>
              <input type="text" class="in" disabled value="${key.secondName}" id="lastName_${generateFormRowId()}">
            </div>
            <div class="age_case" onclick="changeStatusOfInput(${arrayIndex})>
              <label for="age">Age</label>
              <input type="text" class="in" disabled value="${key.age}" id="age_${generateFormRowId()}">
            </div>
            <div class="type_of_abonement_case" id="type_of_abonement_case" onclick="changeStatusOfInput(${arrayIndex})>
              <label for="type_of_abonement">Type of abonement</label>
              <input type="text" class="in" disabled value="${key.abonement}" id="type_${generateFormRowId()}">
            </div>
        </div>
        <button onclick="save(${arrayIndex}); return false">save</button>
        <button onclick ="remove(this, ${arrayIndex}); return false" id="removeButton">delete</button>
        </form>`;
    document.querySelector('.p1').appendChild(div);
  }
}

function changeStatusOfInput(index) {  
    document.getElementById(`firstName_${index+1}`).disabled = false;
    document.getElementById(`lastName_${index+2}`).disabled = false;
    document.getElementById(`age_${index+3}`).disabled = false;
    document.getElementById(`type_${index+4}`).disabled = false;
}

const generateRowId = () => {
  curIndex++;
  return curIndex;
};

let curFormIndex = 0;
const generateFormRowId = () => {
  curFormIndex++;
  return curFormIndex;

};

const remove = (item, arrIndex) => {
  console.log(item);
  curIndex--;
  console.log(arrIndex);
  // for(let i = 0; i < globalData.length; i++) {
  // console.log(globalData[i]);
  const index = globalData.indexOf(arrIndex);
  if (index) {
    globalData.splice(index, 1);
    item.parentNode.remove();
  } else {
    throw new Error('Smth went wrong, try again later');
  }
}

function save(index, firstName, lastName, age, abonement) {
  console.log(firstName);
}

// function deleteClient() {
//   let nameIndex = document.querySelector('.client-delete');
//   let indexDelete = nameIndex.value;
//   if (indexDelete >= 0 && indexDelete < globalData.length) {
//     globalData.splice(indexDelete, 1);
//     document.querySelector('.p1').innerHTML = "";
//     for (key of globalData) {
//       let indexOutput = globalData.indexOf(key);
//       document.querySelector('.p1').innerHTML += ('client:' + (indexOutput + 1) + ' -');
//       for (i in key) {
//         document.querySelector('.p1').innerHTML += (' ' + key[i] + ' ');
//       }
//     }
//   } else {
//     document.querySelector('.p1').innerHTML = "Sorry, no one is registered under this number!!!";
//   }
//   console.log(globalData)
// }



















// if (outputedData.length > 0) {
//   // for (let i = 0; i < outputedData.length; i++) {
//     // if (outputedData[i].textContent === key.firstName) {
//       // continue;
//     // }
//      div.innerHTML += `    <form name="data" id="formElem_${generateRowId()}">
//       <p>Client ${arrayIndex + 1}: ${key.firstName}</p>
//       <div class="main-div" id="row_0"></div>
//       <div class="first_name_case"><label for="first_name">First name</label>
//         <span class="in">${key.firstName}</span>
//       </div>
//       <div class="second_name_case"><label for="second_name">Second name</label>
//         <span class="in">${key.secondName}</span>
//       </div>
//       <div class="age_case"><label for="age">Age</label>
//         <span class="in">${key.age}</span>
//       </div>
//       <div class="type_of_abonement_case" id="type_of_abonement_case">
//         <label for="type_of_abonement">Type of abonement</label>
//         <span class="in">${key.abonement}</span>
//       </div>
//   </div>
//   </form>`;
//   document.querySelector('.p1').appendChild(div);
//     //     for (key of globalData) {
//     //         let arrayIndex = globalData.indexOf(key);
//     //         div.innerHTML += `    <form name="data" id="formElem_${generateRowId()}">
//     //     <p>Client ${arrayIndex + 1}: ${key.firstName}</p>
//     //     <div class="main-div" id="row_0"></div>
//     //     <div class="first_name_case"><label for="first_name">First name</label>
//     //       <span class="in">${key.firstName}</span>
//     //     </div>
//     //     <div class="second_name_case"><label for="second_name">Second name</label>
//     //       <span class="in">${key.secondName}</span>
//     //     </div>
//     //     <div class="age_case"><label for="age">Age</label>
//     //       <span class="in">${key.age}</span>
//     //     </div>
//     //     <div class="type_of_abonement_case" id="type_of_abonement_case">
//     //       <label for="type_of_abonement">Type of abonement</label>
//     //       <span class="in">${key.abonement}</span>
//     //     </div>
//     // </div>
//     // </form>`;
//     //         document.querySelector('.p1').appendChild(div);
//     //     }
//   // }
// } else {
const aga = () => {
  alert(true)
}