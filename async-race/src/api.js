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

  static async createCar(data) {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${url}/garage`, config);

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

  static async updateCar(data) {
    const { color, name, id } = data;

    const car = {
      name,
      color,
    };

    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    };

    const response = await fetch(`${url}/garage/${id}`, config);

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

  static async deleteCarFromGarage(id) {
    const response = await fetch(`${url}/garage/${id}`, { method: 'DELETE' });

    if (response.ok) {
      const json = await response.json();

      return json;
    }

    return null;
  }

  static async deleteCarFromWinners(id) {
    const response = await fetch(`${url}/winners/${id}`, { method: 'DELETE' });

    if (response.ok) {
      const json = await response.json();

      return json;
    }

    return null;
  }

  static async startCar({ id, status }) {
    const response = await fetch(`${url}/engine?id=${id}&status=${status}`);

    if (response.ok) {
      const json = await response.json();

      return {
        success: response.ok,
        data: json,
      };
    }

    return null;
  }

  static async fetchWinners(data) {
    const { pageNumber, sort, order } = data;

    const response = await fetch(
      `${url}/winners?_page=${pageNumber}&_limit=10&_sort=${sort}&_order=${order}`,
    );

    if (response.ok) {
      let json = await response.json();
      const total = response.headers.get('X-Total-Count');
      const cs = [];

      json.forEach(jItem => {
        const cItem = (async () => {
          const re = await fetch(`${url}/garage/${jItem.id}`);
          console.log(re.status);
          if (re.status !== 200) return null;

          const d = await re.json();
          return d;
        })();

        cs.push(cItem);
      });

      const results = await Promise.all(cs);

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

      return {
        data: json,
        count: total,
      };
    }

    return null;
  }

  static async stopCar({ id, status }) {
    const response = await fetch(`${url}/engine?id=${id}&status=${status}`);

    return response;
  }

  static async switchModeToDrive({ id, status }) {
    const response = await fetch(`${url}/engine?id=${id}&status=${status}`);

    return response.status;
  }

  static async getWinner(id) {
    const response = await fetch(`${url}/winners/${id}`);

    if (response.ok) {
      const json = await response.json();

      return {
        winner: json,
        status: response.status,
      };
    }

    return {
      status: response.status,
    };
  }

  static async createWinner(data) {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${url}/winners`, config);

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

  static async updateWinner(winner) {
    const { id, wins, time } = winner;
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wins, time }),
    };

    const response = await fetch(`${url}/winners/${id}`, config);

    if (response.ok) {
      const json = await response.json();

      return json;
    }

    return null;
  }
}

export default Api;
