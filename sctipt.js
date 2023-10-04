var tab_links = document.getElementsByClassName("tab_links");
var tab_contents = document.getElementsByClassName("tab_contents");

function opentab(tab_name){
for(tab_link of tab_links){
        tab_link.classList.remove("active_link");
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tab_name).classList.add("active_tab");
}
    
var sidemenu = document.getElementById("sidemenu");
var fa_xmark = document.getElementsByClassName("fa-xmark");
var fa_bars = document.getElementsByClassName("fa-bars");

fa_bars[0].addEventListener("click",()=>{
    sidemenu.style.right = "0px";
});

fa_xmark[0].addEventListener("click", ()=>{
    sidemenu.style.right = "-200px";
})

var msg = document.getElementById("msg");
var btn3 = document.getElementsByClassName("btn3");

btn3[0].addEventListener("click", ()=>{
    msg.innerHTML = "Message sent succeessfully";
    setTimeout(function(){
        msg.innerHTML = "";
    }, 5000)
    form.reset();
})


