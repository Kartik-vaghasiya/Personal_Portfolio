const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const menu_item=document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header=document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function validation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding="10px";

    if(name.length <4){
        text="Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text="Please Enter Valid Phone Number";
        error_message.innerHTML=text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text="Please Enter Valid Email Address";
        error_message.innerHTML=text;
        return false;
    }

    if(subject.length <5){
        text="Please Enter Subject More Than 5 Characters";
        error_message.innerHTML=text;
        return false;
    }

    if(message.length <20){
        text="Please Enter More Than 20 Character Message";
        error_message.innerHTML=text;
        return false;
    }
    text = "Form Submitted Successfully !!";
    error_message.innerHTML=text;
    return true;
}