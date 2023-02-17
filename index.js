const qa = require("inquirer");
const fs = require("fs");

qa.prompt([
  {
    type: "input",
    message: "What is your project title? ",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project one-sentence overview? ",
    name: "overview",
  },
  {
    type: "input",
    message: "Description? ",
    name: "description",
  },
  {
    type: "input",
    message: "What is the project's dependancies? ",
    name: "dependancies",
  },
  {
    type: "input",
    message: "What is your project's installation instructions ? ",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your project's usage information? ",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your project's contribution guidelines? ",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is your project's test instructions? ",
    name: "test",
  },
  {
    type: "list",
    name: "license",
    choices: [
      "MIT",
      "Apache license 2.0",
      "Public Domain Dedication and License (PDDL)",
      "Mozilla Public License 2.0",
    ],
  },
]).then(function (response) {
  switch (response.license) {
    case "MIT":
      licenseImage =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache license 2.0":
      licenseImage =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Public Domain Dedication and License (PDDL)":
      licenseImage =
        "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      break;
    case "Mozilla Public License 2.0":
      licenseImage =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
  }

  const generated_readme = `
  # ${response.title}
  
  ${licenseImage}
  
  ${response.overview}
  
  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - [Dependencies](#dependencies)
  - [Installation](#installing)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [License](#license)
  
  ## Dependencies
  ${response.dependancies}
  
  ## Installing
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## Contribution 
  ${response.contribution}
  
  ## Test 
  ${response.test}
  
  ## License
  
  This project is licensed under the ${response.license} License - see the LICENSE.md file for details
  `;

  fs.writeFile("README.md.generated", generated_readme, (err) =>
    err
      ? console.error(err)
      : console.log(
          `README.md.generated has been generated. Written ${generated_readme.length} symbols`
        )
  );
});
