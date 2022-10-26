import { BrowserRouter, Route } from 'react-router-dom'
import { routes } from './utils/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {
            Object.keys(routes()).map((element, index) => {
              const RouterComponent = routes()[element].component;
              return <Route exact key={index} path={element} component={() => <RouterComponent />} />
            })
          }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
