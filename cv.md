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

### Education:
RS School JavaScript Front-end Development, Angular (2023 - 2025)<br>
IT Academy WEBSITE DEVELOPMENT WITH HTML, CSS & JAVASCRIPT (March 2022 - July 2022)<br>
Educational Institution "Private Institute of Management and Entrepreneurship" Bachelor's degree, Law
(September 2011 - June 2020)

---

### Experience:

Experience Main Department of Internal Affairs of the Minsk City Executive Committee Logistics Department<br>
Specialist October 2012 - September 2022 (10 years) Minsk, Belarus

---

### Skills:

HTML5, CSS3 (Flexbox, Grid, Responsive Design), JavaScript (ES6+, DOM Manipulation, Event Handling, OOP,
Asynchronous Programming), Git (commits, branching, pull requests), Angular, TypeScript, REST API integration,
Chrome DevTools, NPM, Agile methodologies, Jira, collaborative project development, team leadership (task delegation, coordination).

---

### Code example:

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

### Languages:

- Russian - Native
- Belarussian - B2
- English - B1
- Polish - A2

---

### Hobbies:

- Learning new languages
- Hikking
- Traveling
- Reading books
- Listening to music
