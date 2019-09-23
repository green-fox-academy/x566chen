import {Todo} from './todo';
import {Domino} from './domino';

const dominoes = [];
const todos = [];

dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

todos.push(new Todo(1, 'Breakfast'));
todos.push(new Todo(2, 'Lunch'));
todos.push(new Todo(3, 'Dinner'));

for (let domino of dominoes) {
    console.log(domino.printAllFields());
}
for (let todo of todos) {
    console.log(todo.printAllFields());
}