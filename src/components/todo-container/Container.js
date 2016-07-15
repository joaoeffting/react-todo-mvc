import React from 'react';

class Container extends React.Component {
    constructor() {
        super();
        this.removerTask = this.removerTask.bind(this);
    }
    removerTask(id) {
        this.props.removerTask(id);
    }
    marcarTask(id, completa) {
        this.props.marcarTask(id, completa);
    }
    render() {
        let {filter} = this.props;
        const tasks = this.props.todos.filter((todo, key) => {
            if (filter =="COMPLETAS") {
                if (todo.completa) {
                    return todo;
                }
            } else if (filter =="FALTAM") {
                if (!todo.completa) {
                    return todo;
                }
            }else {
                return todo;
            }
        });
        
        const container = tasks.map((todo, key) => {            
            return (                            
                <div key={key} className="panel-body">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <input type="checkbox" checked={todo.completa} onChange={() => {this.marcarTask(todo.id,todo.completa)}}/>
                            <span> {todo.nome} </span> 
                            <a href="#" onClick={() => {this.removerTask(todo.id)}}>
                                <span className="glyphicon glyphicon-remove-circle" aria-hidden="true" value="teste"></span>
                            </a>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div>
                {container}
            </div>
        );
    }
}

Container.propTypes = {
    todos: React.PropTypes.array.isRequired,
    removerTask: React.PropTypes.func.isRequired,
    marcarTask: React.PropTypes.func.isRequired,
}

export default Container;