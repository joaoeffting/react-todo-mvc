import React from 'react';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addTask({
            nome: this.refs.task.value,
            completa: false
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        ref="task"
                        className="form-control"
                        placeholder="Digite uma tarefa"
                    />
                </div>
                <button type="submit">Adicionar </button>
            </form>
        );
    }
}

export default TaskForm;