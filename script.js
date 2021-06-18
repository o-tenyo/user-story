
let dd;
let mm;
let yy;

function maleUser(){
    if(dd>0 && dd<31 && mm>0 && mm<12){
        console.log(`date: ${dd}`);
        console.log(`month: ${mm}`);
        console.log(`year: ${yy}`);
        var birthday = new Date(mm + '/' + dd + '/' + yy);
        var d = birthday.getDay();
        console.log(birthday)
        alert(`The calculated day is ${d}`)
        if(d==0){
            alert('The corresponding Akan name is Kwasi');
        }
        else if(d==1){
            alert('The corresponding Akan name is Kwadwo');
        }
        else if(d==2){
            alert('The corresponding Akan name is Kwabena');
        }
        else if(d==3){
            alert('The corresponding Akan name is Kwaku');
        }
        else if(d==4){
            alert('The corresponding Akan name is Yaw');
        }
        else if(d==5){
            alert('The corresponding Akan name is Kofi');
        }
        else if(d==6){
            alert('The corresponding Akan name is Kwame');
        }}
    else{
        alert('Invalid Data. \nTry Again!');
    }
}
function femaleUser(){
    if(dd>0 && dd<31 && mm>0 && mm<12){
        console.log(`date: ${dd}`);
        console.log(`month: ${mm}`);
        console.log(`year: ${yy}`);
        var birthday = new Date(mm + '/' + dd + '/' + yy);
        var d = birthday.getDay();
        console.log(birthday)
        alert(`The calculated day is ${d}`)
        if(d==0){
            alert('The corresponding Akan name is Akosua');
        }
        else if(d==1){
            alert('The corresponding Akan name is Adwoa');
        }
        else if(d==2){
            alert('The corresponding Akan name is Abenaa');
        }
        else if(d==3){
            alert('The corresponding Akan name is Akua');
        }
        else if(d==4){
            alert('The corresponding Akan name is Yaa');
        }
        else if(d==5){
            alert('The corresponding Akan name is Afua');
        }
        else{
            alert('The corresponding Akan name is Ama');
        }}
    else{
        alert('Invalid Data. \nTry Again!');
    }
}

function submissionClicked(){
    dd = document.getElementById('day').value;   //fetching dd, mm and yy values from html
    mm = document.getElementById('month').value;
    yy = document.getElementById('year').value;
    // console.log("djkajk");
    if(document.getElementById('male').checked){   //check if the 'male' has been clicked/checked
        let male = document.getElementById('male');  //assign the checked id to male variable
        maleUser();
    }
    if(document.getElementById('female').checked){    
        let female = document.getElementById('female');
        femaleUser();
    }
}

function logReset(event) {
    log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('reset', logReset);

// let submit = document.getElementById('submit');
// submit.addEventListener('click', submissionClicked);