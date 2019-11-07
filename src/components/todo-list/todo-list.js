import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.scss';

class TodoList extends Component {


  render() {

    const { todos } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={id} className="list-group-item">
          <TodoListItem {...itemProps } />
        </li>
      );
    });

    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
  }
}

export default TodoList;
