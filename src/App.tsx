import Form from "./components/Form";
import List from "./components/List";
import "./reset.css";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        gap: "10px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        TODOLIST
      </h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
