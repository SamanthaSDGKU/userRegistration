function displayPerson(){
    var person=JSON.parse(localStorage.getItem('persons'));
    for(var i=0;i<person.length;i++){
        tr=`<tr> 
                <td>${person[i].uname}</td>
                <td>${person[i].email}</td>
                <td>${person[i].age}</td>
            </tr>`
            $('#persons').append(tr);
    }
    
}

displayPerson();