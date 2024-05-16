# [Shop Archives](https://dtacat.github.io/Collectibles/) Snippets

join discord now https://discord.gg/Mcwh7hGcWb

## DevTools

### Gives you permission to use DevTools

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/cca2ab9d-f98c-41ff-837b-ba9e985163f2)

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
