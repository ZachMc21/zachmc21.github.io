let activeContent = "";

//Declare global variablaes
var projectMenu;
var projectMenuLinks;
var projectContentList;
var numProjectCategories;

var projectMenuDropdown;
var mql;
var mobileView;

window.onload = function() {
    //Initialize global variables
    projectMenu = document.getElementById("project_menu");
    projectMenuLinks = document.getElementsByClassName("project_category");
    projectContentList = document.getElementsByClassName("project_container");
    numProjectCategories = projectMenuLinks.length;
    
    projectMenuDropdown = document.getElementById("project_dropdown");
    mql = window.matchMedia("(max-width: 480px)");
    mobileView = mql.matches;

    console.log(projectMenuLinks)
    
    resetProjectMenu();
    if(mobileView) {
        //If Projects button is clicked, show list of projects
            //If list of projects is clicked, show that category
            //Change the Projects button's text to be that category
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
    }
    else {
        //Add an event listener to each item in projectMenuLinks
        for (let i=0; i<numProjectCategories; i++) {
            projectMenuLinks[i].addEventListener("click", function() {
                resetProjectMenu();
                resetProjectContent();
                setActiveMenu(projectMenuLinks[i]);
                setActiveContent(projectContentList[i]);
            });
        }
    }
}


function showDropdownList() {
    for (let i=0; i<numProjectCategories; i++) {
        if (!projectMenuLinks[i].classList.contains("visible")) {
            projectMenuLinks[i].classList.remove("invisible");
            projectMenuLinks[i].classList.add("visible");
        }
    }
}
function hideDropdownList() {
    for (let i=0; i<numProjectCategories; i++) {
        if (projectMenuLinks[i].classList.contains("visible")) {
            projectMenuLinks[i].classList.remove("visible");
            projectMenuLinks[i].classList.add("invisible");
        }
    }
}

function setActiveDropdown(menuItem) {
    var text = menuItem.text;
    projectMenuDropdown.setActiveContent = "&or; " + text;
}

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

function setActiveMenu(menuItem) {
    menuItem.classList.add("active");
}

function setActiveContent(contentItem) {
    contentItem.style.display = 'block';
}