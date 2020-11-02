import AddCocktail from './AddCocktail';
import './App.css';
import Cocktails from './Cocktails';

function App() {
  return (
    <main>
      <div className="container mb-5">
        <h1 className="h1 text-center">Reacting Cocktails</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AddCocktail />
          </div>
          <div className="col-md-8">
            <Cocktails />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
