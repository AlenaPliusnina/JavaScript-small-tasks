const btn = document.querySelector('.j-btn-test');

// Ниже вы обращаетесь к элементу, который всегда содержит только одну иконку.
// По этой причине лучше использовать название icon вместо icons

// Лучше всего именовать классы как-то единообразно, например, при помощи "-".
// В JavaScript не принято широко использовать так называемый snake case с использованием подчёркивания.
// Подробнее об этом можно почитать здесь: https://www.w3schools.com/js/js_conventions.asp
const icon = document.querySelector('.btn-icon');

const svgOne = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path fill-rule="evenodd" d="M5.5 11h4a.5.5 0 0 0 0-1H6.707l4.147-4.146a.5.5 0 0 0-.708-.708L6 9.293V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"/>
</svg>`;

const svgTwo = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-down-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-6.5 3h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793l4.146-4.147a.5.5 0 0 1 .708.708L6.707 10H9.5a.5.5 0 0 1 0 1z"/>
]</svg>`;

icon.innerHTML = svgOne;

let change = true;

btn.addEventListener('click', () => {
    if (change) {
        icon.innerHTML = svgTwo;
        change = false;
    } else {
        icon.innerHTML = svgOne;
        change = true;
    }
});
