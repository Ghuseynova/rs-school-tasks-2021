const url = 'http://127.0.0.1:3000';

class Api {
  static async fetchCars(pageNumber) {
    const response = await fetch(`${url}/garage?_page=${pageNumber}&_limit=7`);

    if (response.ok) {
      const json = await response.json();
      const total = response.headers.get('X-Total-Count');

      return {
        data: json,
        count: total,
      };
    }

    return null;
  }
}

export default Api;
