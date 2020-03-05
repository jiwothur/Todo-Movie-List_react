import React from 'react';
import '../css/TodoForm.css';

const TodoForm = ({value, onChange, onCreate, onKeyPress,onEdit}) => { 
  
  return (
    <div className="form">
     <input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="무엇을 해야 하나요?"/>
    </div>
  );
};

export default TodoForm;