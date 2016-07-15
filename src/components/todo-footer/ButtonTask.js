import React from 'react';

class ButtonTask extends React.Component {
    constructor() {
        super();
        this.onFiltering = this.onFiltering.bind(this);
        this.classAtiva = this.classAtiva.bind(this);
    }

    onFiltering() {
        this.props.filterTask(this.props.filter);
    }

    classAtiva() {
        return this.props.filter == this.props.filterBy;
    }

    render() {
        let classActive = "";
        if (this.classAtiva()) {
            classActive = "active";
        }
        return(
            <li className={this.classActive}>
                <a href="#" onClick={this.onFiltering}> {this.props.nome} 
                    <span className="badge">{this.props.quantidade}</span>
                </a>
            </li>
        );
    }
}

ButtonTask.propTypes = {
    nome: React.PropTypes.string.isRequired,
    quantidade: React.PropTypes.number.isRequired,
}

export default ButtonTask;