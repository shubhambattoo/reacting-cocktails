import * as shortId from 'shortid';

class CocktailsAPI {
  static async getCocktails(filter = {}) {
    const res = await fetch('http://localhost:3000/cocktails');
    if (res.ok) {
      return res.json();
    }
  }

  static async addCocktail(cocktail) {
    const res = await fetch('http://localhost:3000/cocktails', {
      method: 'POST',
      body: JSON.stringify({ ...cocktail, id: shortId() }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 201) {
      return { ...cocktail, id: shortId() };
    }
  }
}

export default CocktailsAPI;
