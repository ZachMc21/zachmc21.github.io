

//TODO set this to be not hard-coded
let project_menu_names = ["swe", "webdev", "data", "database", "gamedev"]
let project_content_names = ["swe_content", "webdev_content", "data_content", "database_content", "gamedev_content"]
const num_project_categories = project_menu_names.length;

window.onload = function() { reset_displayed_content() };


function show_content(element) {
    reset_displayed_content();

    //Set current element to be visible
    element.style.display = 'block';
    //Set current element's menu entry to be active
    element_name_with_content = element.getAttribute("id")
    slice_index = element_name_with_content.indexOf('_');
    element_name = element_name_with_content.slice(0, slice_index);
    document.getElementById(element_name).classList.add('active');
}

//Clear content of projects other than the one selected
function reset_displayed_content() {
    //Set content items to 'display: none'
    for (let i=0; i<num_project_categories; i++) {
        document.getElementById(project_content_names[i]).style.display = 'none';
    }
    
    //Remove active class from all menu links
    for (let i=0; i<num_project_categories; i++) {
        current_menu_item = document.getElementById(project_menu_names[i]);
        if (current_menu_item.classList.contains("active")) {
            current_menu_item.classList.remove("active");
        }
    }
}

//Projects - Software Engineering
function swe() {
    var content = document.getElementById("swe_content");
    /* This function is not getting called for some reason */
    document.getElementById("swe").onclick = function() { show_content(content) };
}

//Projects - Web Development
function webdev() {
    var content = document.getElementById("webdev_content");
    document.getElementById("webdev").onclick = function() { show_content(content) };
}


//Projects - Data Analysis & Visualization
function data() {
    var content = document.getElementById("data_content");
    document.getElementById("data").onclick = function() { show_content(content) };
}


//Projects - Databases
function database() {
    var content = document.getElementById("database_content");
    document.getElementById("database").onclick = function() { show_content(content) };
}


//Projects - Game Development
function gamedev() {
    var content = document.getElementById("gamedev_content");
    document.getElementById("gamedev").onclick = function() { show_content(content) };
}