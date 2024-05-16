# [Shop Archives](https://dtacat.github.io/Collectibles/) Snippets

join discord now https://discord.gg/Mcwh7hGcWb

## DevTools

### Gives you permission to use DevTools

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/c8e0d750-06d2-4818-a6e0-94b5ebe76f62)

### QUICK DEVTOOLS TOGGLE

```js
toggleDevTools()
```

### WORKING DEVTOOLS SNIPPET
```js
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
```

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/6cee0647-5a2d-4a5a-8741-b1a5f27f9612)

### 403 ERROR DEVTOOLS SNIPPET

```js
let button = document.getElementById('devtools-button');

if (button.classList.contains('button')) {
    button.classList.remove('hidden');
}
```
