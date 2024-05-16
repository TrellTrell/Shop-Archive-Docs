let tools = document.getElementById('dev-tools');
let button = document.getElementById('devtools-button');
let button_ = document.getElementById('devtools-button-real');

if (tools.classList.contains('hidden')) {
    tools.classList.remove('hidden');
} else {
    tools.classList.add('hidden');
}

if (button.classList.contains('hidden')) {
    button.classList.remove('hidden');
} else {
    button.classList.add('hidden');
}

if (button.classList.contains('server-button-blue')) {
    button.classList.remove('server-button-blue');
} else {
    button.classList.add('server-button-blue');
}

if (button_.classList.contains('hidden')) {
    button_.classList.remove('hidden');
} else {
    button_.classList.add('hidden');
}

if (button_.classList.contains('server-button-blue')) {
    button_.classList.remove('server-button-blue');
} else {
    button_.classList.add('server-button-blue');
}
