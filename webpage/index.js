let activeContent = "";

window.onload = function() {
    const projectMenu = document.getElementById("project_menu");
    const projectMenuLinks = projectMenu.children;
    const projectContentList = document.getElementsByClassName("project_content");
    const numProjectCategories = projectMenuLinks.length;
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