# Dzmitry Aliakseyeu

## Junior Frontend Developer

### Contact Information:

Mobile: +48690410321<br>
Email: [dmitry.alekseev.s@gmail.com](dmitry.alekseev.s@gmail.com)<br>
LinkedIn: [www.linkedin.com/in/dzmitry-aliakseyeu-16a388234](www.linkedin.com/in/dzmitry-aliakseyeu-16a388234)<br>
Location: Wrocław, Dolnośląskie, Polska

---

### Summary:

Enthusiastic and detail-oriented junior front-end developer with a strong foundation in HTML, CSS, and JavaScript,
as well as basic knowledge of framework Angular framework. Advanced in using Git for version control and familiar
with Agile tools like Jira. Experienced in building responsive, user-friendly websites and interactive web applications
through hands-on projects, including working in collaborative team environments.

---

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

---

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

---

## Education

- Private Institute of Management and Entrepreneurship (lawyer);
- IT Academy (HTML,CSS,JS);
- RS School (in process...);

---

## Languages

- Russian - Native;
- Belarussian - B2;
- English - B1;
- Polish - A2;

---

# Hobbies

- Learning new languages;
- Hikking;
- Traveling;
- Reading books;
- Listening to music;
