import { useEffect } from "react";
import { connect } from "react-redux";
import { getCocktails } from "./redux/actions/cocktails";

const Cocktails = ({ getCocktails, cocktails, isLoading, error }) => {
  useEffect(() => {
    getCocktails();
  }, [getCocktails]);

  return (
    <div>
      <p className="px-3 h3">All Cocktails</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <div className="row">
            {error && <div className="col-md-12">{error.message}</div>}
            {cocktails.map((cocktail) => {
              return (
                <div className="col-md-6" key={cocktail.id}>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{cocktail.title}</h4>
                      <div className="card-text">
                        <ul>
                          {cocktail.ingredients.map((i) => (
                            <li key={i}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cocktails: state.cocktails.allCocktails,
    error: state.cocktails.error,
    isLoading: state.cocktails.isloading,
  };
};

export default connect(mapStateToProps, { getCocktails })(Cocktails);
