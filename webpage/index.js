
var project_categories = document.getElementsByClassName("project_content");
const num_project_categories = project_categories.length;

window.onload = function() {reset_displayed_content()};

function show_content(element) {
    reset_displayed_content();
    element.style.display = 'visible';
}

//Clear content of projects other than the one selected
function reset_displayed_content() {
    for (let i=0; i<num_project_categories; i++) {
        project_categories[i].style.display = 'none';
    }
}

//Projects - Software Engineering
function swe() {
    var element = document.getElementById("swe_content");
    document.getElementById("swe").onclick = function() {show_content(element)};
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