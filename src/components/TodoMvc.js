import React from 'react';
import Header from './todo-header/Header';
import Footer from './todo-footer/Footer';
import Container from './todo-container/Container';

const todo_list = [
    {
        nome: "Estudar React",
        completa: false,
    },
    {
        nome: "Estudar Atomic Design",
        completa: true,
    },
    {
        nome: "Estudar HTML",
        completa: true,
    },
]

class TodoMvc extends React.Component {
    constructor() {
        super();
        this.state = {
            todo_list : [
                {
                    id: 1,
                    nome: "Estudar React",
                    completa: false,
                },
                {
                    id: 2,
                    nome: "Estudar Atomic Design",
                    completa: true,
                },
                {
                    id: 3,
                    nome: "Estudar HTML",
                    completa: true,
                },
            ]
        }
        this.addTask = this.addTask.bind(this);
        this.removerTask = this.removerTask.bind(this);
        this.marcarTask = this.marcarTask.bind(this);
    }

   addTask(task) {
        let todos = this.state.todo_list;
        todos.push(
            {
                id: 1 * Math.random(),
                nome: task.nome,
                completa: false,
            }
        )
        this.setState({todo_list: todos});
    }

    removerTask(id) {
        let todos = this.state.todo_list;
        let tasks = todos.filter((todo) => {
            return todo.id !== id
        });

        this.setState({todo_list: tasks});
    }

    marcarTask(id,checked) {
        let todos = this.state.todo_list;
        let tasks = todos.filter((task) => {
            if  (task.id === id) {
                task.completa = !checked;
                return task;
            }
            return task;
        });
        this.setState({todo_list: tasks});
    }

    render() {
        return(
            <div className="container">
                <div className="panel panel-default">
                    <Header 
                        addTask={this.addTask}
                    />
                    <Container 
                        todos={this.state.todo_list}
                        removerTask={this.removerTask}
                        marcarTask={this.marcarTask}
                    />                    
                    <Footer
                        todos={this.state.todo_list}
                    />
                </div>
            </div>
        );
    }
}

export default TodoMvc;