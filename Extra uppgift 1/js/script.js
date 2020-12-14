


let users = [
    { firstName: "Simon", lastName: "Söderberg", active: true},
    { firstName: "Hans", lastName: "Olsson", active: false},
    { firstName: "Johan", lastName: "Svensson", active: false},
    { firstName: "Oscar", lastName: "Nilsson", active: true},
    { firstName: "Nils", lastName: "Andersson", active: true},
    { firstName: "Anna", lastName: "Berg", active: false},
    { firstName: "Sofia", lastName: "Ludvigsson", active: true},
    { firstName: "Julia", lastName: "Ibrahim", active: false},
    { firstName: "Jenifer", lastName: "Mohammed", active: true},
    { firstName: "Oscar", lastName: "Svensson", active: true}
]

//lägger till person i array
// users.push({ firstName: "Nils", lastName: "Holgesson", active: true});




//listan startar
let list = '<ul>'

//loopar ut listan
users.forEach(function(user) {

    if (user.active == true) {
        list += '<li class="active">' + user.firstName + " " + user.lastName + '</li>';
    }
    else if (user.active == false){
        list += '<li class="unactive">' + user.firstName + " " + user.lastName +  '</li>';
    }
});


//listan tar slut
list += '</ul>';

//skriver ut listan i diven med id personer
document.getElementById("personer").innerHTML = list;






/* Funktioner */

//ska lägga till user
function adduser() {
    users.push ({
        firstName: "Nils", lastName: "Holgesson", active: true

        // firstName: document.getElementById("firstname").Value, 
        // lastName: document.getElementById("lastname").Value,    
        // active: document.getElementById("active").value,
        // active: document.getElementById("unavtive").value
    })
    //skapar listan
    list = '<ul>'
    users.forEach(function(user) {
        if (user.active == true) {
            list += '<li class="active">' + user.firstName + " " + user.lastName + '</li>';
        }
        else if (user.active == false){
            list += '<li class="unactive">' + user.firstName + " " + user.lastName +  '</li>';
        }
    });
    //stänger listan
    list += '</ul>';
    //skriver ut listan i diven med id personer
    document.getElementById("personer").innerHTML = list;


    console.log(users)
}


//tar bort objekt ur arrayen
function removeuser() {
    users.pop(console.log(users));
    //skapar listan
    list = '<ul>'
    users.forEach(function(user) {

        if (user.active == true) {
            list += '<li class="active">' + user.firstName + " " + user.lastName + '</li>';
        }
        else if (user.active == false){
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
