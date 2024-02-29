import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.redBright('Welcome To My Survey Form'))

let answers = await inquirer.prompt([{
    name: "name",
    type: 'input',
    message: "Enter your First Name:",
    validate:(ans)=>{
        if(!ans){
            return "Please Enter your First Name to Proceed survey";
        }
        return true;
    }
    },
    {name: "lname",
    type: 'input',
    message: "Enter your Last Name:",
    validate:(ans)=>{
        if(!ans){
            return "Please Enter your Last Name to Proceed survey";
        }
        return true;
    }
},
    {
        name: "gender",
    type: "list",
    message: "Select your Gender:",
    choices: ["Male","Female"],
    
    validate:(ans)=>{
        if(!ans){
            return "Please Enter your Gender to Proceed survey";
        }
        return true;}
    },
   { name: "Age",
    type: 'input',
    message: "Enter your Age:",
    validate:(ans)=>{
        if(!ans){
            return "Please Enter your Age to Proceed survey";
        }
        return true;}
    },
    {name: "email",
    type: 'input',
    message: "Enter your Email Address:",
    validate:(ans)=>{
        if(!ans){
            return "Please Enter your Email to Proceed survey";
        }
        return true;
    }},
    {name: "course",
    type: 'list',
    message: "Select your Desired Career Path:",
    choices: ["Front End Developer","Back End Developer","Full Stack"],
    validate:(ans)=>{
        if(!ans){
            return "Please Enter your Desired Career Path";
        }
        return true;
    }
    }    
    
])
console.log(chalk.blue(answers.name,'',answers.lname,'', 'You have entered the above Data about yourself, Thank you for your Time!'));
console.log(chalk.green('Wish me Luck!'));

