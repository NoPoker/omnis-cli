const cliEnabled = () => {
	const inquirer = require('inquirer');
	const { name } = require('../package.json');
	const fs = require('fs');
	const cwd = process.cwd();
	const os = require('os');
	let defaultVersion: any = '1.0.0';

	

	const needToCreate = {
		framework: '', //fornt.....
		use: '', //ts or js
	};

	inquirer
	.prompt([
		/* Pass your questions in here */
		{
			type: 'input',
			message: `Your project name (omnis-lang-app):`,
			name: 'project_name',
		},
		{
			type: 'input',
			message: `Project version (${defaultVersion}):`,
			name: 'project_version',
		},
		{
			type: 'list',
			message: 'What are you using?:',
			name: 'framework',
			choices: ['fullstack', 'frontend', 'backend'],
		},
	])

		.then((answers: any) => {
			answers.project_name
			? answers.project_name
			: (answers.project_name = `omnis-${answers.using}-app`);
		  answers.project_version
			? (defaultVersion = answers.project_version)
			: defaultVersion;
		  needToCreate.framework = answers.framework;
		



	// 		const writeFilesToFolder = () => {
	// 			const fileCode = `//Omnis genaration project
      
    //   const newArray = [1,1,2,3,5,8,13]
    //   newArray.join()
      
    //   console.log(newArray)
    //   `;
	// 			fs.writeFileSync(
	// 				cwd + `\\${answers.project_name + `\\index.js`}`,
	// 				fileCode,
	// 				(err) => {
	// 					throw err;
	// 				}
	// 			);
	// 		};


	// 		if (needToCreate.framework === 'frontend') {
	// 			fs.access(cwd + `\\${answers.project_name}`, (err) => {
	// 				if (err) {
	// 					fs.mkdirSync(cwd + `\\${answers.project_name}`, async (err) => {
	// 						if (err) return console.warn(err);
	// 					});
	// 				} else {
	// 					return writeFilesToFolder();
	// 				}
	// 			});
	// 			fs.access(cwd + `\\${answers.project_name + `\\index.js`}`, (err) => {
	// 				writeFilesToFolder();
	// 			});
	// 		}

			const writeFilesToFolderBackendNode = () => {
				const writeFileTOFolderJsonBackendNode = `{
		"name": "${answers.project_name}",
		"version": "${defaultVersion}",
		"description": "${answers.project_name} created by ${name}!",
		"main": "server.js",
		"scripts": {
		"start": "node server.js"
		},
		"keywords": ["${answers.project_name}"],
		"author": "@${os.hostname()}",
		"license": "ISC",
		"dependencies": {
		"express": "^4.17.1"
		}
		}
		`;

				fs.writeFileSync(
					cwd + `\\${answers.project_name + `\\packege.json`}`,
					writeFileTOFolderJsonBackendNode,
					(err: any) => {
						throw err;
					}
				);
			};

			// function with the code
			if (needToCreate.framework === 'backend') {

				inquirer
					.prompt([
						{
							type: 'list',
							message: 'What are you using?:',
							name: 'using',
							choices: ['javascript', 'typescript', 'python'],
						}
					])
					.then((answers: any) => {
						if(answers.using === 'javascript') {
							fs.writeFileSync(cwd + `\\test.js`, "const os = require(\'os\'")
						}
					})

		
					if(answers.using === 'typescript') {}
					if(answers.using === 'python') {}
	
				

			// fs.access(cwd + `\\${answers.project_name}`, (err) => {
			// 	if (err) {
			// 	  fs.mkdirSync(cwd + `\\${answers.project_name}`, async (err) => {
			// 		if (err) return console.warn(err);
			// 	  });
			// 	} else {
			// 	  return (
			// 		writeFilesToFolderBackendNode()
			// 	  );
			// 	}
			//   });
			
			//   fs.access(cwd + `\\${answers.project_name + `\\package.json`}`, (err) => {
			// 	writeFilesToFolderBackendNode();
			//   });
			//   fs.access(cwd + `\\${answers.project_name + `\\server.js`}`, (err) => {
				
			//   });
			}
		})

		.catch((error: any) => {
			if (error.isTtyError) {
				// Prompt couldn't be rendered in the current environment
				console.log('Intall another environment');
			} else {
				// Something else went wrong
				console.log(error);
			}
		});
}
module.exports = {
	cliEnabled
};