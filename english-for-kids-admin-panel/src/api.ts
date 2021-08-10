const URL = 'http://localhost:3000';

class Api {
  static async fetchCategories<T>(): Promise<T | null> {
    const response = await fetch(`${URL}/categories`);

    if (response.ok) {
      const data = await response.json();

      return data;
    }
    return null;
  }
}

export default Api;
