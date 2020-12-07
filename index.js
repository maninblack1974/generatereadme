const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//Create a function to prompt the user with the questions needed in order to complete and the create the READEME file
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of what your project will accomplish?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide an installation guide in order for a user to run this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How should your project be used?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Enter the contibutors on your project',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enther the Test Instructions here',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Select a license for your project',
      choices: [
        "Apache",
        "MIT",
        "ISC",
        "GNU GPLv3",
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};

function generateReadMe(answers) {
  return
`# ${answers.title}

## Description 

${answers.description}

## Table of Contents (Optional)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)


## Installation

${answers.installation}

## Usage 

${answers.usage}

## Credits

${answers.contributors}

## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.



## Tests



## Questions
${answers.email}
${answers.github}
${answers.linkedin}
---

`};

// Bonus using async/await and try/catch
const init = async () => {
  console.log('hi');
  try {
    const answers = await promptUser();

    const readMe = generateReadMe(answers);

    await writeFileAsync('README.md', readMe);

    console.log('Successfully wrote to index.html');
  } catch (err) {
    console.log(err);
  }
};

init();