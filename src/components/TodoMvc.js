import React from 'react';
import Header from './todo-header/Header';
import Footer from './todo-footer/Footer';
import Container from './todo-container/Container';

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
            ],
            filter: "TODAS",
        }
        this.addTask = this.addTask.bind(this);
        this.removerTask = this.removerTask.bind(this);
        this.marcarTask = this.marcarTask.bind(this);
        this.filterTask = this.filterTask.bind(this);
    }

    filterTask(filter) {
        this.setState({filter: filter});
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
                        filter={this.state.filter}
                    />                    
                    <Footer
                        todos={this.state.todo_list}
                        filterTask={this.filterTask}
                        filter={this.state.filter}
                    />
                </div>
            </div>
        );
    }
}

export default TodoMvc;
