import React from 'react';

class ButtonTask extends React.Component {
    render() {
        return(
            <li className="active">
                <a href="#"> {this.props.nome} 
                    <span className="badge">{this.props.quantidade}</span>
                </a>
            </li>
        );
    }
}

export default ButtonTask;