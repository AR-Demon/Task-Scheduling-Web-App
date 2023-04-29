import { Navbar } from "./components/navigation/topNavbar";
import { ToDoList } from "./components/To-do List/toDoList";

const MainApp = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#371817",
        margin: 0,
      }}
    >
      <Navbar />
      <ToDoList />
    </div>
  );
};

export default MainApp;
