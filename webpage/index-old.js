

//TODO set this to be not hard-coded
let project_menu_names = ["swe", "webdev", "data", "database", "gamedev"]
let project_content_names = ["swe_content", "webdev_content", "data_content", "database_content", "gamedev_content"]
const num_project_categories = project_menu_names.length;


/*
window.onload = loadPage();

function loadPage() {
    reset_displayed_content();

    var content;
    
    content = document.getElementById("swe_content");
    document.getElementById("swe").onclick = function() { showContent(content) };
    
    content = document.getElementById("webdev_content");
    document.getElementById("webdev").onclick = function() { showContent(content) };
    
    content = document.getElementById("data_content");
    document.getElementById("data").onclick = function() { showContent(content) };

    content = document.getElementById("database_content");
    document.getElementById("database").onclick = function() { showContent(content) };

    content = document.getElementById("gamedev_content");
    document.getElementById("gamedev").onclick = function() { showContent(content) };
}


// TODO: rework with cleaner text/element_name management
function showContent(element) {
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
    document.getElementById("swe").onclick = function() { showContent(content) };
}

//Projects - Web Development
function webdev() {
    var content = document.getElementById("webdev_content");
    document.getElementById("webdev").onclick = function() { showContent(content) };
}

//Projects - Data Analysis & Visualization
function data() {
    var content = document.getElementById("data_content");
    document.getElementById("data").onclick = function() { showContent(content) };
}

//Projects - Databases
function database() {
    var content = document.getElementById("database_content");
    document.getElementById("database").onclick = function() { showContent(content) };
}

//Projects - Game Development
function gamedev() {
    var content = document.getElementById("gamedev_content");
    document.getElementById("gamedev").onclick = function() { showContent(content) };
}
*/

let activeContent = "";

function toggleContent(element) {
    // 1. get element with the ID activeContent
    let previousActiveElement = document.getElementById(activeContent);
    // 2. check if this element exists
    // 3. if yes, then remove the active class
    if (previousActiveElement) {
        previousActiveElement.classList.remove("active");
    }
    // 4. set active class on itemId, set activeContent = itemId
    element.classList.add("active");
    activeContent = element.id;
    //console.log(activeContent);

    projectCategory = previousActiveElement.dataset.projectCategory;
}

//Set up projects_menu to read clicks
window.onload = function() {
    const menuElement = document.getElementById('projects_menu');
    const menuItems = menuElement.children;
    console.log(menuItems);

    for (let i=0; i<menuItems.length; i++) {
        const currentItem = menuItems[i];
        const contentId = currentItem.dataset.projectCategory;
        const contentElement = document.getElementById(contentId);

        currentItem.addEventListener("click", function() {
            toggleContent(contentElement);
        })
    }
};