
let project_menu_items = document.getElementById("projects_menu").childNodes;
const num_project_categories = project_menu_items.length;

window.onload = function() { reset_displayed_content() };


function show_content(element) {
    reset_displayed_content();

    //Set current element to be visible and an active menu
    element.style.display = 'visible';
    element.classList.add('active');
}

//Clear content of projects other than the one selected
function reset_displayed_content() {
    var content_list = document.getElementsByClassName("project_content");
    //Set content items to 'display: none'
    for (let i=0; i<num_project_categories; i++) {
        content_list[i].style.display = 'none';
    }
    
    //Remove active class from all menu links
    for (let i=0; i<num_project_categories; i++) {
        var isActive = project_menu_items.item(i).hasClass('active');
        if (isActive) {
            project_menu_items[i].classList.remove("active");
        }
    }
}

//Projects - Software Engineering
function swe() {
    var content = document.getElementById("swe_content");
    document.getElementById("swe").onclick = function() { show_content(content) };
}

//Projects - Web Development
function webdev() {
}


//Projects - Data Analysis & Visualization
function data() {
}


//Projects - Databases
function database() {
}


//Projects - Game Development
function gamedev() {
}