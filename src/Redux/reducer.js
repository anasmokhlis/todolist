import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  CANCEL_EDIT_TODO,
  CHANGE_INPUT,
  CLEAR_INPUT,
  EDIT_TODO
} from "./types";

const initState = {
  todos: [
    { id: 1, name: "anas", age: 28 },
    { id: 2, name: "simo", age: 31 },
    { id: 3, name: "test", age: 34 }
  ],
  todo: {},
  edit: false,
  id: "",
  name: "",
  age: ""
};

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.todo
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: action.todo
      };

    case UPDATE_TODO:
      return {
        ...state,
        todo: action.todo,
        edit: true,
        id: action.todo.id,
        name: action.todo.name,
        age: action.todo.age
      };

    case EDIT_TODO:
      return {
        ...state,
        todo: {},
        edit: false,
        todos: action.todo
      };

    case CANCEL_EDIT_TODO:
      return {
        ...state,
        todo: {},
        edit: false,
        id: "",
        name: "",
        age: ""
      };
    case CHANGE_INPUT:
      return {
        ...state,
        [Object.keys(action.payload)]: Object.values(action.payload).toString()
      };

    case CLEAR_INPUT:
      return {
        ...state,
        id: "",
        name: "",
        age: ""
      };

    default:
      return state;
  }
}
