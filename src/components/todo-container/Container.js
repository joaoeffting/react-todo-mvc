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
        const container = this.props.todos.map((todo, key) => {
            
            return (            
                <div id={key} className="panel-body">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <input type="checkbox" defaultChecked={todo.completa} onClick={() => {this.marcarTask(todo.id,todo.completa)}}/>
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

export default Container;