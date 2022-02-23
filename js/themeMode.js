let darkMode = localStorage.getItem("darkMode");
let modeThemeToggle = document.querySelector(".mode");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode" ,"enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};

if(darkMode === 'enabled'){
    enableDarkMode();
    $('.mode i').toggleClass('fa-sun');
}

modeThemeToggle.addEventListener('click', () =>{
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== 'enabled') {
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
})
$(function(){
    $('.mode').click(function(){
        $('.mode i').toggleClass('fa-sun');
    })
    
})

