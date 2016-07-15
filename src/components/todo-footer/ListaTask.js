import React from 'react';
import ButtonTask from './ButtonTask';
class ListaTask extends React.Component {
    render() {
        const quantidadeCompletas = this.props.todos.filter((todo) => {
            return todo.completa == true;
        });
        const quantidadeFaltam = this.props.todos.filter((todo) => {
            return todo.completa == false;
        });
        return(
            <ul className="nav nav-pills" role="tablist">
                <ButtonTask
                    nome="Todas"
                    quantidade={this.props.todos.length}
                    filterTask={this.props.filterTask}
                    filter="TODAS"
                    filterBy={this.props.filter}
                />
                <ButtonTask
                    nome="Completas"
                    quantidade={quantidadeCompletas.length}
                    filterTask={this.props.filterTask}
                    filter="COMPLETAS"
                    filterBy={this.props.filter}
                />
                <ButtonTask
                    nome="Faltam"
                    quantidade={quantidadeFaltam.length}
                    filterTask={this.props.filterTask}
                    filter="FALTAM"
                    filterBy={this.props.filter}
                />
            </ul>
        );
    }
}

ListaTask.propTypes = {
    todos: React.PropTypes.array.isRequired,
}

export default ListaTask;