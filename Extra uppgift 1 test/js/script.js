


let users = [
    { firstName: "Simon", lastName: "Söderberg", status: true},
    { firstName: "Hans", lastName: "Olsson", status: false},
    { firstName: "Johan", lastName: "Svensson", status: false},
    { firstName: "Oscar", lastName: "Nilsson", status: true},
    { firstName: "Nils", lastName: "Andersson", status: true},
    { firstName: "Anna", lastName: "Berg", status: false},
    { firstName: "Sofia", lastName: "Ludvigsson", status: true},
    { firstName: "Julia", lastName: "Ibrahim", status: false},
    { firstName: "Jenifer", lastName: "Mohammed", status: true},
    { firstName: "Oscar", lastName: "Svensson", status: true},
]

//lägger till person i array
// users.push({ firstName: "Nils", lastName: "Holgesson", status: true});

//listan startar
let list = '<ul>'
//loopar ut listan
users.forEach(function(user) {

    if (user.status == true) {
        list += '<li class="active">' + user.firstName + " " + user.lastName + '</li>';
    }
    else if (user.status == false){
        list += '<li class="unactive">' + user.firstName + " " + user.lastName +  '</li>';
    }
});
//listan tar slut
list += '</ul>';
//skriver ut listan i diven med id personer
document.getElementById("personer").innerHTML = list;

// klart detta över ska va kvar











// let user = {firstName: username, lastName: userlastname}
// console.log(user)

//fungerar lägger till objekt i arrayen
function pushData() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById('lastname').value;
    let active = document.getElementById('active').checked;

    if (status.checked == true) {
        return status == true
    }

    //skapar ett objekt
    let user = {
        firstName: firstname, 
        lastName: lastname,
        status: active
    }
    console.log(user)
    //trycker upp objektet i arrayen
    users.push(user)
    console.log(users)

    list = '<ul>'
    users.forEach(function(user) {
        if (user.status == true) {
            list += '<li class="active">' + user.firstName + " " + user.lastName + '</li>';
        }
        else if (user.status == false){
            list += '<li class="unactive">' + user.firstName + " " + user.lastName +  '</li>';
        }
        // else 
        // list += '<li class="unactive">' + user.firstName + " " + user.lastName +  '</li>';

    });
    //stänger listan
    list += '</ul>';
    //skriver ut listan i diven med id personer
    document.getElementById("personer").innerHTML = list;

}




//tar bort objekt ur arrayen
function removeuser() {
    users.pop(console.log(users));
    //skapar listan
    list = '<ul>'
    users.forEach(function(user) {

        if (user.status == true) {
            list += '<li class="active">' + user.firstName + " " + user.lastName + '</li>';
        }
        else if (user.status == false){
            list += '<li class="unactive">' + user.firstName + " " + user.lastName +  '</li>';
        }
    });
    //stänger listan
    list += '</ul>';
    //skriver ut listan i diven med id personer
    document.getElementById("personer").innerHTML = list;
}



// users.forEach(users => {
//     document.getElementById("demo").innerHTML = (users.firstName + " " + users.lastName + " status: " + users.active);
//     users++
// });






// //fungerar men denna array innehåller inga objekt
// let slides = ["slide 1111", "slide 2", "slide 3", "slide 4", "slide 5"]
// let str = '<ul>'

// slides.forEach(function(slide) {
//   str += '<li>'+ slide + '</li>';
// }); 

// str += '</ul>';
// document.getElementById("slideContainer").innerHTML = str;




//testade en for loop för att se om koden var fel 
// for (let index = 0; index < users.length; index++) {
//     list += '<li>' + users[index].firstName + " " + users[index].lastName + '</li>';

//     if (users[index].active == "1") {
//         document.getElementById("personer").style.color = "blue"
//     }

//     else if (users[index].active == "2"){
//         document.getElementById("personer").style.color = "orange"
//     }    
// }
