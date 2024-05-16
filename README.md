## [Shop Archives](https://dtacat.github.io/Collectibles/)
![Logo (38)](https://github.com/DTACat/DTACat/assets/141873540/e2c14c9f-45a3-4c1a-8da8-9f8ecb9b5833)

join discord now https://discord.gg/Mcwh7hGcWb

# Snippets

## DevTools

### Gives you permission to use DevTools

![image](https://github.com/TrellTrell/Shop-Archive-Snippets/assets/149860492/cca2ab9d-f98c-41ff-837b-ba9e985163f2)

```
let tools = document.getElementById('dev-tools');
let button = document.getElementById('settins-button');
let button_ = document.getElementById('devtools-button');

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
```
