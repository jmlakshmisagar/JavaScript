
document.querySelector('#string').addEventListener('input', (input) => {
    const value = input.target.value;
    ['lowerCase', 'upperCase', 'camelCase', 'pascalCase', 'snakeCase', 'kebabCase', 'trimCase'].forEach(funcName => {
        document.getElementById(funcName).innerText = window[funcName](value);
    });
});

function upperCase(string) {
    return string.toUpperCase();
}

function lowerCase(string) {
    return string.toLowerCase();
}

function camelCase(string) {
    const words = sanitize(string).split(' ');
    return words[0].toLowerCase() +
        words.slice(1).map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
}

function pascalCase(string) {
    return sanitize(string).split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

function snakeCase(string) {
    return sanitize(string).split(' ').join('_').toLowerCase();
}

function kebabCase(string) {
    return sanitize(string).split(' ').join('-').toLowerCase();
}

function trimCase(string) {
    return sanitize(string).split(' ').join('');
}

function sanitize(str) {
    return str
        .replace(/[^a-zA-Z0-9 ]/g, '') 
        .replace(/\s+/g, ' ')          
        .trim();
}

document.querySelector('#string').dispatchEvent(new Event('input'));