import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import SplashScreen from "./Components/SplashScreen/spalash";
import Home from "./Components/Home/home";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => {};
  }, [loading]);

  if (loading) {
    return <Home></Home>;
  } else {
    return (
      <div className="App splashColor">
        <SplashScreen className="splashColor"></SplashScreen>
      </div>
    );
  }
}

export default App;
