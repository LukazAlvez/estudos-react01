import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import './app.css'

function App() {
  return (
    <div className='main'>
      <NavBar />
      <Header />
      <Card>
        <h1>Titulo</h1>
        <p>Incididunt magna occaecat culpa Lorem id irure.</p>
      </Card>
      <Card>
        <h1>Titulo</h1>
        <p>Incididunt magna occaecat culpa Lorem id irure.</p>
      </Card><Card>
        <h1>Titulo</h1>
        <p>Incididunt magna occaecat culpa Lorem id irure.</p>
      </Card>
    </div>
  );
}

export default App;
