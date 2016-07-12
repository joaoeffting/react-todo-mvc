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
                />
                <ButtonTask
                    nome="Completas"
                    quantidade={quantidadeCompletas.length}
                />
                <ButtonTask
                    nome="Faltam"
                    quantidade={quantidadeFaltam.length}
                />
            </ul>
        );
    }
}

export default ListaTask;