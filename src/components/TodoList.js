import React, { Component } from 'react';
import TodoListTemplate from './TodoListTemplate';
import TodoForm from './TodoForm'
import TodoItemList from './TodoItemList';

class TodoList extends Component{
  id =0;
  state = {
    input: '',
    todos: [
    ],
    editItem:false
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value 
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; 
    const nextTodos = [...todos]; 

    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleEdit = (id) =>{
    const { todos } = this.state;
    const selectedItem = todos.find(todo => todo.id === id);
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
      input:selectedItem.text,
      editItem : true,
    });
    }

  handleEdited = (id) =>{
      const { input, todos } = this.state;
      this.setState({
        checked: false,
        todos: todos.concat({
        id:this.id,
        text: input
      })
      });
    }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', 
      todos: todos.concat({
      id: this.id++,
      text: input,
      checked: false
      })
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleKeyPress = (e) => {
    if(this.state.editItem)
    {
      if(e.key === 'Enter') {
        alert("완료하지 못하였습니다.")
        this.setState({
          editItem :!this.state.editItem
        });
      }
    }
    else{
      if(e.key === 'Enter') {
        this.handleCreate();
      }
    }
  }

  render() {
    const { input, todos,editItem } = this.state; 
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleEdit,
    } = this;

    return (
      <TodoListTemplate form={(
        <TodoForm 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          onEdit ={editItem}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} onEdit={handleEdit}/>
      </TodoListTemplate>
    );
  }
}

export default TodoList;
