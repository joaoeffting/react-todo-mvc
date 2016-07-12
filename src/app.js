import React from 'react';
import ReactDom from 'react-dom';

import TodoMvc from './components/TodoMvc';

ReactDom.render(
    <TodoMvc />,
    document.getElementById('app')
);