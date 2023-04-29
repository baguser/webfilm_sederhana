import "./App.css";
import NavigationBar from "./component/navigation";
import Intro from "./component/intro";
import "./style/landingPage.css";
import Trending from "./component/trending";
import Superhero from "./component/superhero";

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
