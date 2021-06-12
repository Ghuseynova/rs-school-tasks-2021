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

  static async fetchWinners(pageNumber) {
    const response = await fetch(
      `${url}/winners?_page=${pageNumber}&_limit=10`,
    );

    if (response.ok) {
      let json = await response.json();
      const total = response.headers.get('X-Total-Count');
      const cs = [];

      console.log(json);

      json.forEach(jItem => {
        const cItem = (async () => {
          const re = await fetch(`${url}/garage/${jItem.id}`);
          if (re.status !== 200) return null;
          const d = await re.json();
          return d;
        })();

        cs.push(cItem);
      });

      const results = await Promise.all(cs);
      console.log(results);

      json = json.map(jItem => {
        const winsCar = jItem;
        results.forEach(result => {
          if (jItem.id === result.id) {
            winsCar.name = result.name;
            winsCar.color = result.color;
          }
        });

        return winsCar;
      });

      console.log(json);

      return {
        data: json,
        count: total,
      };
    }

    return null;
  }
}

export default Api;
