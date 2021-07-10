var persons=[];
class Person{
    constructor(uname,pass,email,age){
        this.uname=uname;
        this.pass=pass;
        this.email=email;
        this.age=age;
    }
}
function registerPerson(){
    var txtName = $('#userName').val();
    var txtPass = $('#password').val();
    var txtEmail= $('#userEmail').val();
    var txtAge= $('#userAge').val();
    if(inputValidation(txtName,txtPass,txtEmail,txtAge)){
        var thePerson = new Person(txtName,txtPass,txtEmail,txtAge);
        persons.push(thePerson);
        localStorage.setItem('persons',JSON.stringify(persons));
        clearInputs();
    }else{
        alert("You can't register an empty user!");
    }
}
function clearInputs(){
    $('#userName').val("");
    $('#password').val("");
    $('#userEmail').val("");
    $('#userAge').val("");
}
function inputValidation(i1,i2,i3,i4){
    if(i1!="" && i2!="" && i3!="" && i4!=""){
        return true;
    }
}
function login(){
    var txtUname=$('#userName').val();
    var txtUpass=$('#password').val();

    if(localStorage.getItem('persons')){
        var person=JSON.parse(localStorage.getItem('persons'));

        for(var i=0;i<person.length;i++){
            if(txtUname==person[i].uname && txtUpass==person[i].pass){
            window.location.href = "home.html";
            }else{
                alert("You need to sing up!");
            }
        }
    }else{
        alert("There are none registrations!");
    }
}


