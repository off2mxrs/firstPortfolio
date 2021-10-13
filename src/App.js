import { Switch, Route } from 'react-router-dom'
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
   <div> 
    <Header />
    <Switch>
      <Route path="/" component={Portfolio} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} />

    </Switch>
   </div>
  );
}

export default App;
