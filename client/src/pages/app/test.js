import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components/navigation/topNavbar";
import { ToDoList } from "./components/To-do List/toDoList";
import { setUserTodo } from "../../state/userReducer";
import { useEffect } from "react";

function MainApp() {
  console.log("MainApp rendered");

  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);

  const getUserTodo = async () => {
    const response = await fetch(`http://localhost:3001/user/todos?Id=${user_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log("Working");
    getUserTodo().then((data) => {
      dispatch(setUserTodo(data));
    });
  }, [dispatch, getUserTodo]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#371817",
        margin: 0,
      }}
    >
      {
        //<Navbar />
        //<ToDoList />
      }
    </div>
  );
}

export default MainApp;
