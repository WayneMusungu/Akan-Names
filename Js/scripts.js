// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

//  where;

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month 

//  mod - is the modulus function ( % )

// [1900 12 31]- Our calendar year example

function done(){
    var dob = document.getElementById("dob");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    dobArray = dob.value.split("-")
    
    console.log(dobArray)
    var CC = dobArray[0][0] + dobArray[0][1]
    console.log(CC)

    var YY = dobArray[0][2] + dobArray[0][3]
    console.log(YY)

    var MM =dobArray[1]
    console.log(MM)

    var DD = dobArray[2]
    console.log(DD)

    var cc = parseInt(CC);
    var yy = parseInt(YY);
    var mm = parseInt(MM);
    var dd = parseInt(DD);

    var d = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
    d=parseInt(d)
    console.log(d)
    
    var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

      
    
    if(akanMale[d] === undefined|| akanFemale[d] === undefined){
        alert("You entered the wrong date")
    }else{
        
        if(male.checked === true){
        console.log(akanMale[d])
        alert("Your Akan Name is " + akanMale[d])
    }

    if(female.checked === true){
        console.log(akanFemale[d])

        alert("Your Akan Name is " + akanFemale[d])
        
    }

    }




    

    


}