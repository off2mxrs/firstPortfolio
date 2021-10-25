import { Switch, Route } from 'react-router-dom'
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
   <div> 
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Portfolio} exact />
      <Route path="/skills" component={Skills} exact />
      <Route path="/contact" component={Contact} />

    </Switch>
    <Header />
   </div>
  );
}

export default App;
