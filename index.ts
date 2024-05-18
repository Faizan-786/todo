import inquirer from 'inquirer';

interface Todo {
    task: string;
    completed: boolean;
}

const todos: Todo[] = [];

async function addTodo() {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter your task:'
    });
    todos.push({ task: answer.task, completed: false });
    console.log('Task added:', answer.task);
}

async function listTodos() {
    console.log('Your tasks:');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo.task} [${todo.completed ? 'Completed' : 'Pending'}]`);
    });
}

async function main() {
    let exit = false;
    while (!exit) {
        const answer = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ['Add task', 'List tasks', 'Exit']
        });
        switch (answer.action) {
            case 'Add task':
                await addTodo();
                break;
            case 'List tasks':
                await listTodos();
                break;
            case 'Exit':
                exit = true;
                break;
        }
    }
}

main();
