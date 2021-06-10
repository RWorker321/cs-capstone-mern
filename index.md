Sleep-Tracking MERN-Stack Project
Course
Computer Science Capstone CS-499

What is the Artifact?
The sleep-tracking application development began in May of 2021 and was completed in late June 2021 (21EW5) for Southern New Hampshire University’s Computer Science Capstone (CS-499-T5475). The artifact presented in my ePortfolio is a sleep-tracking SPA (single-page application) that was developed using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). The sleep-tracking application can create, read, update, and delete (CRUD) usernames, sleep goals, and sleep journals. Additional features include HTTP (Hypertext Transfer Protocol) request methods to open-source APIs (application programming interface) such as NASA’s Astronomy Picture of the Day that returns an astronomy-related image with a description each day. I also included a dream word interpreter that displays the user’s journal entry, allows them to input a word into the search bar, and the DataMuse API call returns adjectives relating to the user-selected word to assist in the interpretation of the user’s dream journal entry. Sleep metrics are also displayed to the user via a line chart that extracts the duration of the user's sleep journal into the line chart's dataset.

Justification
I determined that the artifacts within my sleep-tracking application would be an advantageous addition to my ePortfolio since the development of a MERN-stack application demonstrates comprehension of software design/engineering, algorithms and data structures, and databases. This comprehension stems from the ability to develop and integrate front and back-end architecture to meet the required functionality of the application and user’s needs.

Software Design and Engineering
For the software design and engineering artifacts, the specific components that showcase my skills and abilities are based upon the addition of multiple React components that are responsible for functionality such as returning/displaying sleep-metrics in the form of a line chart, integrating APIs that expand the functionality of my application, and creating a user-friendly UI (user interface) that allows the user to intuitively CRUD their data entries. Each tab within my application has an explicit function that isolates specific functionality without overwhelming the user. Comments also explicitly and concisely detail program syntax increasing the readability of my source code.

Algorithms and Data Structures
Regarding the algorithms and data structures artifacts, request and response data sent and received from either the MongoDB database or API calls required iteration and filtering of relevant data. This response data was either mapped or pushed to arrays that would then be displayed to the user. Exception handling was also crucial in the components and routing files utilizing then and catch statements that logged relevant errors to the console. I replaced traditional functions with arrow functions to increase readability and maintain consistency throughout my source code.

Databases
The database artifact is demonstrated using a MongoDB Atlas database consisting of three collections and multiple documents. Mongoose schemas are responsible for structuring database entries and setting rules such as data types, required/unique inputs, and min/max length of user-input data. The user also can CRUD their entries on the main page of the application simply by clicking the provided links/routes.

Reflection
The process of enhancing the MERN stack template began with planning the functionality and complexity of my application. I wanted to alter and expand upon the exercise-tracking application template by incorporating functionality such as API calls and additional database schemas. Also, providing the user with a sleep-metrics line chart will allow them to track their sleep duration from their sleep journal entries.

One challenge that I faced while developing my project was integrating API request and response data into React components and states, especially for the HTTP request methods that required user parameters. Concepts such as string interpolation with template literals as the user’s parameters alleviated this hurdle and allowed me to integrate URI (Uniform Resource Identifier) component encoding for increased security.

Since this sleep-tracking application was my first project using the MERN stack, professor-provided feedback was essential in the creation and revisions of my project. The feedback given from each milestone provided me with suggestions to improve my final project and the narrative that would encompass the overall aim of the project and ePortfolio. With each milestone covering software design/engineering, algorithms and data structures, and databases, I would integrate the feedback into both my narratives and project revisions.

Work in Progress
Challenges
This is where I will list challenges
testBold and testItalics

OOP and Foundational Concepts
This is where I will cover OOP and foundational concepts learned
testBullets

TestBullet01
TestBullet02
TestBullet03
Code
Examples code will be displayed here
const testCode = "Test Code";

For more details see GitHub Flavored Markdown.

Jekyll Themes
Your Pages site will use the layout and styles from the Jekyll theme you have selected in your repository settings. The name of this theme is saved in the Jekyll _config.yml configuration file.
