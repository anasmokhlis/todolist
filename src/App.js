import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Todo from "./Components/Todo";
import { Delete_Todo, Update_Todo } from "./Redux/actions";

function App(props) {
  function deleteTodo(id) {
    const todoFilter = props.todos.filter(todo => todo.id !== id);

    console.log(todoFilter);

    props.Delete_Todo(todoFilter);
  }

  return (
    <div className="container">
      <Todo />
      <div className="listeTodo">
        {props.todos.length ? (
          props.todos.map((todo, i) => {
            return (
              <div className="todoItem" key={i}>
                <div className="id">{todo.id}</div>
                <div className="name">{todo.name}</div>
                <div className="age">{todo.age}</div>
                <div>
                  <button onClick={() => props.Update_Todo(todo)}>
                    Update
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Items</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    todo: state.todo,
    name: state.name,
    age: state.age
  };
};

const mapDispachToProps = {
  Update_Todo,
  Delete_Todo
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
