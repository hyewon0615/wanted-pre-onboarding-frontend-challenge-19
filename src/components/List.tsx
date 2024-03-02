import { useDispatch, useSelector } from "react-redux";
import { TodosState, deleteTodo } from "../store/modules/todosSlice";
type Todolist = {
  todos: TodosState;
};
const List = () => {
  const todoList = useSelector((state: Todolist) => state.todos.todos);
  const dispatch = useDispatch();
  const deletehandle = (id: number) => {
    dispatch(deleteTodo(id));
  };
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      {todoList.map((todo) => {
        return (
          <li
            key={todo.id}
            style={{
              display: "flex",
              gap: "5px",
              borderRadius: "10px",
              alignItems: "center",
              border: "2px solid gray",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <h1
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
                maxWidth: "300px",
              }}
            >
              {todo.text}
            </h1>
            <button
              onClick={() => deletehandle(todo.id)}
              style={{ height: "30px", borderRadius: "8px" }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
