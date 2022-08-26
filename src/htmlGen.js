const { writeFile } = require('fs');

/*Output is used to generate the html template.*/
let output = `    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team!</title>
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <header>
        <h1 class="title">Welcome To My Team Profile!</h1>
    </header>
    <div>
        <main>`;

/*HtmlGen function plugs in the users input to help create an ideal html file.*/
const htmlGen = ({ Managers, Engineers, Interns }) => {

    if (Managers.length) {
        output += `<div class="row">`;

        Managers.forEach(mgr => {
            output += `<div class="card">
                            <div class="card-head">
                                <h2>${mgr.getName()}</h2>
                                <h4>Manager</h4>
                            </div>
                                <p>ID: ${mgr.getId()} </p>
                                <p>Email: <a href="mailto:${mgr.getEmail()}">${mgr.getEmail()}</a></p>
                                <p>Office number: ${mgr.getOfficeNumber()}</p>
                        </div>`});

            output += `</div><h1>Managers</h1><hr>`;
    };

    if (Engineers.length) {
        output += `<div class="row">`;

        Engineers.forEach(eng => {
            output += `
                                <div class="card">
                                <div class="card-head">
                                    <h2>${eng.getName()}</h2>
                                    <h4>Engineer</h4>
                                </div>
                                <p>ID: ${eng.getId()} </p>
                                <p>Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></p>
                                <p>Github: <a href="${eng.getGithub()}">${eng.getGithub()}</a></p>
                            </div>`});
        output += `</div><h1>Engineers</h1><hr>`;
    };

    if (Interns.length) {
        output += `<div class="row">`;

        Interns.forEach(int => {
            output += `
                                <div class="card">
                                <div class="card-head">
                                    <h2>${int.getName()}</h2>
                                    <h4>Engineer</h4>
                                </div>
                                <p>ID: ${int.getId()} </p>
                                <p>Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></p>
                                <p>School: ${int.getSchool()}</p>
                            </div>`});
    };
    output += `</div><h1>Interns</h1><hr></main></div></body></html>`;

    writeFile('./dist/TeamBuilder.html', output, ()=> console.log('TeamBuilder.html was created...'));
};

module.exports = htmlGen;