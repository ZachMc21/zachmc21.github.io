let activeContent = "";

//Global variablaes
var projectMenu;
var projectMenuLinks;
var projectContentList;
var numProjectCategories;

var projectMenuDropdown;
var mobileView;

var mobileMax = 768;

//Watch for window resizing
window.addEventListener("resize", checkWindowSize);

//On window load
window.onload = function() {
    //Initialize global variables
    projectMenu = document.getElementById("project_menu");
    projectMenuLinks = document.getElementsByClassName("project_category");
    projectContentList = document.getElementsByClassName("project_container");
    numProjectCategories = projectMenuLinks.length;
    
    projectMenuDropdown = document.getElementById("project_dropdown");
    
    resetProjectMenu();
    checkWindowSize();
}

function checkWindowSize() {
    //console.log("Window size checked");
    var currentSize = document.getElementsByTagName('body')[0].clientWidth;
    //console.log(currentSize);
    if(currentSize <= mobileMax) {
        loadMobile();
    }
    else {
        loadDesktop();
    }
}

//BEGIN HELPER FUNCTIONS

//---UNIVERSAL FUNCTIONS
function resetProjectMenu() {
    for (let i=0; i<numProjectCategories; i++) {
        if (projectMenuLinks[i].classList.contains("active")) {
            projectMenuLinks[i].classList.remove("active");
        }
    }
}

function resetProjectContent() {
    for (let i=0; i<numProjectCategories; i++) {
        projectContentList[i].style.display="none";
    }
}

function setActiveContent(contentItem) {
    contentItem.style.display = 'block';
}


//---DESKTOP FUNCTIONS
function loadDesktop() {
    projectMenuDropdown.style.display = "none";
    //Add an event listener to each item in projectMenuLinks
    for (let i=0; i<numProjectCategories; i++) {
        projectMenuLinks[i].addEventListener("click", function() {
            resetProjectMenu();
            resetProjectContent();
            setActiveMenu(projectMenuLinks[i]);
            setActiveContent(projectContentList[i]);
        });
    }
    //console.log("desktop JS loaded");
}

function setActiveMenu(menuItem) {
    menuItem.classList.add("active");
}


//---MOBILE FUNCTIONS
function loadMobile() {
    projectMenuDropdown.style.display = "block";
    resetProjectMenu();
    //console.log(projectMenuDropdown.style.display);

    //If Projects button is clicked, show list of projects
    projectMenuDropdown.addEventListener("click", function() {
        //If the dropdown is showing, and the button is clicked, hide the dropdown menu
        if(projectMenuLinks[0].classList.contains("visible")) {
            hideDropdownList();
            resetProjectContent();
        }
        else {
            showDropdownList();

            //Listen for a click on one of the menu items
            for (let i=0; i<numProjectCategories; i++) {
                projectMenuLinks[i].addEventListener("click", function() {
                    hideDropdownList();
                    resetProjectContent();
                    setActiveDropdown(projectMenuLinks[i]);
                    setActiveContent(projectContentList[i]);
                });
            }
        }
    });
    //console.log("mobile JS loaded");
}

function showDropdownList() {
    for (let i=0; i<numProjectCategories; i++) {
        if (!projectMenuLinks[i].classList.contains("visible")) {
            projectMenuLinks[i].classList.remove("invisible");
            projectMenuLinks[i].classList.add("visible");
        }
    }
    //console.log("Dropdown list shown");
}
function hideDropdownList() {
    for (let i=0; i<numProjectCategories; i++) {
        if (projectMenuLinks[i].classList.contains("visible")) {
            projectMenuLinks[i].classList.remove("visible");
            projectMenuLinks[i].classList.add("invisible");
        }
    }
    //console.log("Dropdown list hidden");
}

//Change the Projects button's text to be that category
function setActiveDropdown(menuItem) {
    var text = menuItem.text;
    if(text==="Data Analysis & Visualization") {
        projectMenuDropdown.style = "font-size: 1.85rem;";
    }
    projectMenuDropdown.innerHTML = "&or; " + text;
}