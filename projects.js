let activeContent = "";

//Declare global variablaes
var projectMenu;
var projectMenuLinks;
var projectContentList;
var numProjectCategories;

window.onload = function() {
    //Initialize global variables
    projectMenu = document.getElementById("project_menu");
    projectMenuLinks = projectMenu.children;
    projectContentList = document.getElementsByClassName("project_container");
    numProjectCategories = projectMenuLinks.length;

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