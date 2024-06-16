# [Shop Archives](https://dtacat.github.io/Collectibles/) Snippets

## Works on shop14.2
You can find the Shop Archives version in the settings menu.

join discord now https://discord.gg/Mcwh7hGcWb

## Dev Mode

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/03add335-0f4d-402c-8167-f6bdd1081a98)

### DEV MODE
```js
dev()
```

## ~~DevTools~~
Included in the snippet above.

### ~~Gives you permission to use DevTools~~

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/6cee0647-5a2d-4a5a-8741-b1a5f27f9612)

### 403 ERROR DEVTOOLS SNIPPET

```js
let button = document.getElementById('devtools-button'); button.classList.remove('hidden');
```

# Anything below this point either does not work or is outdated

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/c8e0d750-06d2-4818-a6e0-94b5ebe76f62)

### ~~QUICK DEVTOOLS TOGGLE~~

```js
toggleDevTools()
```

### ~~WORKING DEVTOOLS SNIPPET~~
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
