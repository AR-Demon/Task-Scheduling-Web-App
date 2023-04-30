import { useDispatch, useSelector} from "react-redux";
import { Navbar } from "./components/navigation/topNavbar";
import { ToDoList } from "./components/To-do List/toDoList";
import { setUserStats, setUserTodo } from "../../state/userReducer";
import { useEffect} from "react";

function MainApp(){
  console.log("MainApp rendered");
  //useDispatch to use Reducer Function for local storage
  const dispatch = useDispatch();

  //useSelector to ge local storage userId and Token for authorization
  const user_id = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);

  //function to get particular user todo
  const getUserTodo = async() => {
    const Response = await fetch(`http://localhost:3001/user/todos?Id=${user_id}`, {
      method:"GET",
      headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
    });
    const UserTodoData = await Response.json();
    return UserTodoData;
  }

  //function to get particular user stats
  const getUserStats = async() => {
    const Response = await fetch (`http://localhost:3001/user/stats?Id=${user_id}`,{
    method:"GET",
    headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
    });
    const userStatsData = await Response.json();
    return userStatsData;
  }
  

  useEffect(() => {
    getUserTodo().then((data) => {
      console.log(data);
      dispatch(setUserTodo(data));
    });
    getUserStats().then((data) => {
      dispatch(setUserStats(data));
      //console.log(data);
    })
  }, [getUserTodo, dispatch, getUserStats]);
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