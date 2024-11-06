# Dzmitry Aliakseyeu

### Junior Frontend Developer

## Contacts:

- Country: Poland;
- City: Wroclaw;
- Postal code: 52-131;
- Phone number: +48690410321;
- [Git](https://github.com/DzmitryAliakseyeu)

## Summary:

My main purpose for taht course it's improving my programming skills and English. I have some experience in creating web pages, web applications, scripting. Previously, I finished IT Academy in Belarus, RS school - stages 0-2 in Russian.

## Skills:

- HTML;
- CSS;
- JavaScript;
- Git;
- Figma;
- Typescript (Basic);
- React (Basic);
- Scss/Sass;
- OOP;
- Jira;
- Scrum;

## Code example:

```
    function check(str, bracketsConfig) {
    let objBrackets = {};
    let openBrackets = [];
    let sameBrackets = [];

    bracketsConfig.forEach(pair => {
        objBrackets[pair[1]] = pair[0];
        openBrackets.push(pair[0]);
        if (pair[0] === pair[1]) sameBrackets.push(pair[0]);
    });

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let current = str[i];


        if (openBrackets.includes(current)) {
        if (sameBrackets.includes(current)) {
            if (stack[stack.length - 1] === current) {
            stack.pop();
            } else {
            stack.push(current);
            }
        } else {
            stack.push(current);
        }
        } else {
        if (stack.length === 0 || stack.pop() !== objBrackets[current]) {
            return false;
        }
        }
    }

    return stack.length === 0;
    }
```
