import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { addCocktail } from "./redux/actions/cocktails";

const errorMessagesSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  ingredients: Yup.string().required("Required"),
});

const AddCocktail = ({ addCocktail, addError }) => {
  function handleAddCocktail(values, { setSubmitting, resetForm }) {
    const cocktail = {
      title: values.title,
      ingredients: values.ingredients.split(","),
    };
    addCocktail(cocktail);
    setSubmitting(false);
    resetForm();
  }

  return (
    <>
      {addError && <p>{JSON.stringify(addError)}</p>}
      <Formik
        initialValues={{ title: "", ingredients: "" }}
        onSubmit={handleAddCocktail}
        validationSchema={errorMessagesSchema}
      >
        {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="name">Cocktail title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="form-control"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="form-text text-danger"
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
                      value={values.ingredients}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="ingredients"
                      component="div"
                      className="form-text text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    disabled={isSubmitting}
                  >
                    Add Cocktail
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addError: state.cocktails.addError,
    addPending: state.cocktails.addPending,
  };
};

export default connect(mapStateToProps, { addCocktail })(AddCocktail);
