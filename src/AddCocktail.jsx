const AddCocktail = () => {
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="name">Cocktail title</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                id="ingredients"
                name="ingredients"
                placeholder="separate by comma"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-success w-100">
              Add Cocktail
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddCocktail;
