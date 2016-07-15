import React from 'react';
import ListaTask from './ListaTask';

class Footer extends React.Component {
    render() {
        return(
            <div className="panel-footer">
                <ListaTask 
                    todos={this.props.todos} 
                    filterTask={this.props.filterTask}
                    filter={this.props.filter}
                />
            </div>
        );
    }
}

Footer.propTypes = {
    todos: React.PropTypes.array.isRequired,
}

export default Footer;