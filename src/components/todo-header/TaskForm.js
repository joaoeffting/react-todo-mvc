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
        this.refs.task.value = "";
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
            </form>
        );
    }
}

TaskForm.propTypes = {
    addTask: React.PropTypes.func.isRequired,
}

export default TaskForm;