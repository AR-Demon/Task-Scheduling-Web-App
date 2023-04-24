import { Navbar } from "./components/navigation/topNavbar";
import { ToDoList } from "./components/To-do List/toDoList";

const MainApp = () => {
  return (
    <div>
      <ToDoList />
      <Navbar />
    </div>
  );
};

export default MainApp;
