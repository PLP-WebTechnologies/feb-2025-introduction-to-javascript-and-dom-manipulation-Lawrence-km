// DOM Elements
const titleElement = document.getElementById('main-title');
const dynamicText = document.getElementById('dynamic-text');
const textChangerBtn = document.getElementById('text-changer');
const styleBox = document.getElementById('style-box');
const styleChangerBtn = document.getElementById('style-changer');
const elementContainer = document.getElementById('element-container');
const elementTogglerBtn = document.getElementById('element-toggler');

// Change Text Content
textChangerBtn.addEventListener('click', function() {
    dynamicText.textContent = "Text successfully changed using JavaScript!";
    dynamicText.style.color = "#2196F3";
});

// Modify CSS Styles
styleChangerBtn.addEventListener('click', function() {
    styleBox.classList.toggle('highlight');
    
    if (styleBox.classList.contains('highlight')) {
        styleBox.textContent = "Styled Box!";
    } else {
        styleBox.textContent = "This box will change style";
    }
});

// Add/Remove Elements
let newElementExists = false;
let newElement = null;

elementTogglerBtn.addEventListener('click', function() {
    if (!newElementExists) {
        newElement = document.createElement('div');
        newElement.className = 'new-element';
        newElement.textContent = 'New element added dynamically!';
        elementContainer.appendChild(newElement);
        elementTogglerBtn.textContent = 'Remove Element';
    } else {
        elementContainer.removeChild(newElement);
        elementTogglerBtn.textContent = 'Add Element';
    }
    newElementExists = !newElementExists;
});

// Bonus: Change page title on hover
titleElement.addEventListener('mouseover', function() {
    titleElement.textContent = "Interactive DOM Demo";
});

titleElement.addEventListener('mouseout', function() {
    titleElement.textContent = "DOM Manipulation Demo";
});
