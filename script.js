var settingsmenu = document.querySelector(".settings-menu");
var darkBtn= document.getElementById("dark-btn");
var card = document.getElementById("card");

let likeBtn= function(icon){
    icon.classList.toggle('fa-solid');
}

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }

}

if (localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

// preventing default in like 

$(document).on('click', '.fa-heart', function(e){
    e.preventDefault();
});

// login and registration flip

function openRegister(){
    card.style.transform = "rotateY(-180deg)";
}
function openLogin(){
    card.style.transform = "rotateY(0deg)";
}