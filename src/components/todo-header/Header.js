import React from 'react';
import TaskForm from './TaskForm';


class Header extends React.Component {
    render() {
        return(
            <div className="panel-heading">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h3 className="text-center"> Todo com React </h3>
                        <TaskForm addTask={this.props.addTask}/>
                    </div>
                </div>
            </div>
        ); 
    }
}

Header.propTypes = {
    addTask : React.PropTypes.func.isRequired,
}

export default Header;