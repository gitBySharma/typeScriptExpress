import { Router } from 'express';
import { Todo } from '../models/todos';

const router = Router();

let todos: Todo[] = [];


router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});


router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };

    todos.push(newTodo);
    res.status(200).json({ message: 'Todo added successfully', createdTodo: todos });
});


router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === String(id));

    if (index !== -1) {
        todos.splice(index, 1);
        res.status(200).json({ message: 'Todo deleted successfully' });

    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});


router.put('/todo/edit/:id', (req, res, next) => {
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id === String(id));

    if (index !== -1) {
        todos[index].text = req.body.text;
        res.status(200).json({ message: 'Todo updated successfully', updatedTodo: todos });

    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

export default router;

