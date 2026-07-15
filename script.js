// =============================
// Paradise Hotel JavaScript
// =============================

// Welcome Message
window.onload = function () {
    alert("Welcome to Paradise Hotel!");
};

// -----------------------------
// Booking Form Validation
// -----------------------------
function validateBooking() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (checkin == "") {
        alert("Please select check-in date.");
        return false;
    }

    if (checkout == "") {
        alert("Please select check-out date.");
        return false;
    }

    if (checkout <= checkin) {
        alert("Check-out date must be after check-in date.");
        return false;
    }

    alert("Booking submitted successfully!");
    return true;
}

// -----------------------------
// Room Booking Buttons
// -----------------------------
function bookRoom(roomName) {

    alert("You selected: " + roomName);

}

// -----------------------------
// Image Hover Effect
// -----------------------------
let galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image){

    image.addEventListener("mouseover",function(){

        image.style.transform="scale(1.08)";
    });

    image.addEventListener("mouseout",function(){

        image.style.transform="scale(1)";
    });

});

// -----------------------------
// Smooth Scroll
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// -----------------------------
// Current Year
// -----------------------------
let year = document.getElementById("year");

if(year){

    year.innerHTML = new Date().getFullYear();

}

// -----------------------------
// Back To Top Button
// -----------------------------

let topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.padding="12px";
topButton.style.fontSize="20px";
topButton.style.display="none";
topButton.style.cursor="pointer";

document.body.appendChild(topButton);

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

};

topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// -----------------------------
// Mobile Navigation Toggle
// -----------------------------
function toggleMenu(){

    let menu=document.getElementById("menu");

    if(menu.style.display==="block"){

        menu.style.display="none";

    }else{

        menu.style.display="block";

    }

}