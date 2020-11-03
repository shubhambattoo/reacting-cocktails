import { Provider } from "react-redux";
import AddCocktail from "./AddCocktail";
import "./App.css";
import Cocktails from "./Cocktails";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
