import React from 'react';
import '../css/TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
  return (
    <div className="title">
      <span id="main" >Todo</span>
        <main className="todo-list-template">
          <section className="form-wrapper">
            {form}
          </section>
          <section className="todos-wrapper">
            { children }
          </section>
        </main>
    </div>
  );
};

export default TodoListTemplate;