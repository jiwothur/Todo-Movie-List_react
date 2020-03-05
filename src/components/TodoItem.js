import React, { Component } from 'react';
import '../css/TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  
  render() {
    const { text, checked, id, onToggle, onRemove,onEdit } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark"></div>)
        }
         <div className="Edit" onClick={(e) => {
          onEdit(id)}
        }>수정
        </div>

        <div className="remove" onClick={(e) => {
          e.stopPropagation(); 
          onRemove(id)}
        }>삭제
        </div>
      </div>
    );
  }
}

export default TodoItem;