import { Navbar } from "./components/navigation/topNavbar";
import { ToDoList } from "./components/To-do List/toDoList";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <ToDoList />
    </div>
  );
};

export default MainApp;
