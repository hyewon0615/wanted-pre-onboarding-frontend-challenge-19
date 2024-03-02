import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/modules/todosSlice";
type FormData = {
  todo: string;
};
const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const dispatch = useDispatch();

  const onsubmit = handleSubmit(({ todo }) => {
    dispatch(addTodo(todo));
    reset();
  });
  return (
    <form
      onSubmit={onsubmit}
      style={{
        display: "flex",
        border: "3px solid black",
        padding: "20px",
        gap: "10px",
        borderRadius: "10px",
      }}
    >
      <input
        {...register("todo", { required: "할일을 입력해주세요" })}
        style={{
          width: "300px",
          height: "30px",
          borderRadius: "8px",
        }}
      ></input>
      <button
        type="submit"
        style={{
          borderRadius: "8px",
        }}
      >
        add
      </button>
    </form>
  );
};

export default Form;
