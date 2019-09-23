import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Add_Todo,
  Update_Todo,
  Cancel_Edit_Todo,
  chnageInput,
  clearInput,
  Edit_Todo
} from "../Redux/actions";

class Todo extends Component {

  onChange = e => {
    this.props.chnageInput({
      [e.target.name]: e.target.value
    });
  };

  AddTodo = e => {
    e.preventDefault();
    const { todos, name, age } = this.props;
    const todosLength = todos.length;
    const idLastTodo = todos[todosLength - 1].id;
    const newTodo = {
      id: idLastTodo + 1,
      name,
      age
    };
    this.props.Add_Todo(todos.concat(newTodo));
    this.props.clearInput();
  };

  onUpdate = e => {
    e.preventDefault();
    const { todos, id, name, age } = this.props;

    const newTodos = todos.filter(todo => todo.id !== id);
    const newTodo = {
      id,
      name,
      age
    };
    this.props.Edit_Todo(newTodos.concat([newTodo]));
    this.props.clearInput();
  };

  Cancel_Edit_Todo = e => {
    e.preventDefault();
  };

  render() {
    const { edit, name, age } = this.props;
    return (
      <form>
        <input
          type="text"
          name="name"
          onChange={this.onChange}
          placeholder="nom"
          value={name}
        />
        <input
          type="text"
          name="age"
          onChange={this.onChange}
          placeholder="age"
          value={age}
        />
        {edit ? (
          <div>
            <button onClick={e => this.onUpdate(e)}>Edit</button>
            <button onClick={() => this.props.Cancel_Edit_Todo()}>
              Cancel
            </button>
          </div>
        ) : (
          <button onClick={this.AddTodo}>Add</button>
        )}
      </form>
    );
  }
}

const mapDispachToProps = {
  Add_Todo,
  Update_Todo,
  Cancel_Edit_Todo,
  chnageInput,
  clearInput,
  Edit_Todo
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    todo: state.todo,
    edit: state.edit,
    id: state.id,
    name: state.name,
    age: state.age
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Todo);
