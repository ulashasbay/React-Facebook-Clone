import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Widgets from "./components/Widgets/Widgets";
import { useAuth } from "./context/authContext";

function App() {
  const { currentUser, isLoading } = useAuth();
  return (
    <div className="app">
      {!isLoading &&
        (!currentUser ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        ))}
    </div>
  );
}

export default App;
