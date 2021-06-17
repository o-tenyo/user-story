
let dd;
let mm;
let yy;

function maleUser(){
    if(dd>0 && dd<31 && mm>0 && mm<12){
        console.log(dd);
        console.log(mm);
        console.log(yy);
        var birthday = new Date(dd + '/' + mm + '/' + yy);
        var d = birthday.getDay();
        console.log(birthday)
        console.log(d)
        if(d==0){
            console.log('Kwasi');
        }
        else if(d==1){
            console.log('Kwadwo');
        }
        else if(d==2){
            console.log('Kwabena');
        }
        else if(d==3){
            console.log('Kwaku');
        }
        else if(d==4){
            console.log('Yaw');
        }
        else if(d==5){
            console.log('Kofi');
        }
        else if(d==6){
            console.log('Kwame');
        }}
    else{
        console.log('Invalid Data. \nTry Again!');
    }
}
function femaleUser(){
    if(dd>0 && dd<31 && mm>0 && mm<12){
        var birthday = new Date(dd + '/' + mm + '/' + year);
        var d = birthday.getDay();
        console.log(d)
        if(d==0){
            console.log('Akosua');
        }
        else if(d==1){
            console.log('Adwoa');
        }
        else if(d==2){
            console.log('Abenaa');
        }
        else if(d==3){
            console.log('Akua');
        }
        else if(d==4){
            console.log('Yaa');
        }
        else if(d==5){
            console.log('Afua');
        }
        else{
            console.log('Ama');
        }}
    else{
        console.log('Invalid Data. \nTry Again!');
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

// let submit = document.getElementById('submit');
// submit.addEventListener('click', submissionClicked);