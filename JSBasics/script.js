//decision making
/*var age=18;
if(age<13)
{
    console.log("minor");
}
else if(age>=18)
{
    console.log("major");
}

// terenary operator con?true:false
age>=18?console.log("major"):console.log("minor");
//function
function hindu(firstName,Lastname)
{
    console.log(firstName+' '+Lastname);
}
hindu('hindu','garkapati');

//array

var names=['hindu','apoorva','ujwala'];
console.log(names[1]);
console.log(names.length);
names.push('ankita');
names.unshift('radhika');//inserting from beginning
names.pop();
console.log(names);


var mydetails={
    firstname:'hindu',
    Lastname:'garkapati',
    dob:1998,
    family:['hindu','suchitra'],
    calcage: function(birthyear)
    {
        return 2019-birthyear;
    }
};

console.log(mydetails.firstname);
var z='dob';
console.log(mydetails[z]);
mydetails.dob=1999;
console.log(mydetails);

var shiva = new Object();
shiva.firstname='hindu kumari';
console.log(shiva);
console.log('hindu is'+mydetails.calcage(1998)+'years old');*/

//challenge 2

var tips=[];
var bills=[];
function tipcalculator(bill)
{

    if(bill<50)
    {
        tip=bill*(20/100); 
    }
    else if(bill<200 && bill>50)
    {
         tip=bill*(15/100);
    }
    else
    {
        tip=bill*(10/100);
    }
    tips.push(tip);
    bill=Number(bill)+Number(tip);
    bills.push(bill);
}
  tipcalculator('124');
  tipcalculator('48');
  tipcalculator('268');
  console.log(tips);
  console.log(bills);