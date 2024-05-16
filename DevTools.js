let tools = document.getElementById('dev-tools');
let tools403 = document.getElementById('dev-tools-403');
let button = document.getElementById('devtools-button');
let button_ = document.getElementById('devtools-button-real');

if (tools.classList.contains('hidden')) {
    tools.classList.remove('hidden');
}

if (tools403.classList.contains('left-sidebar')) {
    tools403.classList.add('hidden');
}

if (button.classList.contains('button')) {
    button.classList.add('hidden');
}

if (button.classList.contains('server-button-blue')) {
    button.classList.remove('server-button-blue');
}

if (button_.classList.contains('hidden')) {
    button_.classList.remove('hidden');
}

if (button_.classList.contains('button')) {
    button_.classList.add('server-button-blue');
}
