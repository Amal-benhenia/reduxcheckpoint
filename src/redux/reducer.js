import { ADD, DELETE, DONE } from "./action-types";

const initialState = {
  todos: [
    { text: "Attend the conference", id: 1, isDone: false },
    { text: "Finish the homework", id: 2, isDone: false },
    { text: "Workout", id: 3, isDone: false },
  ],
  test: "",
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload), 
      };
      case DONE: return{
          ...state,
          todos:state.todos.map(el=> el.id=== action.payload?   {...el,isDone:!el.isDone    } :el )
      }

      case ADD: return{
          ...state,
          todos:[...state.todos, action.payload]
      }
    default:
      return state;
  }
};