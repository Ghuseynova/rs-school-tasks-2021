import { carsPerPage, winnersPerPage, URL } from './constants';

class Api {
  static async fetchCars(pageNumber: number): Promise<{
    data: { name: string; color: string; id: number }[];
    count: unknown;
  } | null> {
    const response = await fetch(`${URL}/garage?_page=${pageNumber}&_limit=${carsPerPage}`);

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

  static async createCar(data: { name: string; color: string }): Promise<{
    data: { name: string; color: string; id: number };
    count: unknown;
  } | null> {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${URL}/garage`, config);

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

  static async updateCar(data: { name: string; color: string; id: number }): Promise<{
    data: { name: string; color: string; id: number };
    count: unknown;
  } | null> {
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

    const response = await fetch(`${URL}/garage/${id}`, config);

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

  static async deleteCarFromGarage(id: number): Promise<Record<string, never> | null> {
    const response = await fetch(`${URL}/garage/${id}`, { method: 'DELETE' });

    if (response.ok) {
      const json = await response.json();

      return json;
    }

    return null;
  }

  static async deleteCarFromWinners(id: number): Promise<Record<string, never> | null> {
    const response = await fetch(`${URL}/winners/${id}`, { method: 'DELETE' });

    if (response.ok) {
      const json = await response.json();

      return json;
    }

    return null;
  }

  static async startCar({ id, status }: { id: number; status: string }): Promise<{
    success: boolean;
    data: {
      velocity: number;
      distance: number;
    };
  } | null> {
    const response = await fetch(`${URL}/engine?id=${id}&status=${status}`);

    if (response.ok) {
      const json = await response.json();

      return {
        success: response.ok,
        data: json,
      };
    }

    return null;
  }

  static async fetchWinners(data: { pageNumber: number; sort: string; order: string }): Promise<{
    data: {
      name: string;
      color: string;
      id: number;
      wins: number;
      time: number;
    }[];
    count: unknown;
  } | null> {
    const { pageNumber, sort, order } = data;

    const response = await fetch(
      `${URL}/winners?_page=${pageNumber}&_limit=${winnersPerPage}&_sort=${sort}&_order=${order}`,
    );

    if (response.ok) {
      let json = await response.json();
      const total = response.headers.get('X-Total-Count');
      const cs: { name: string; color: string; id: number }[] = [];

      json.forEach((jItem: { id: number; wins: number; time: number }) => {
        const cItem: any = (async () => {
          const re = await fetch(`${URL}/garage/${jItem.id}`);

          if (re.status !== 200) return null;

          const d = await re.json();
          return d;
        })();

        cs.push(cItem);
      });

      const results = await Promise.all(cs);

      json = json.map((jItem: { id: number; name: string; color: string }) => {
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

  static async stopCar({ id, status }: { id: number; status: string }): Promise<unknown> {
    const response = await fetch(`${URL}/engine?id=${id}&status=${status}`);

    return response;
  }

  static async switchModeToDrive({ id, status }: { id: number; status: string }): Promise<number> {
    const response = await fetch(`${URL}/engine?id=${id}&status=${status}`);

    return response.status;
  }

  static async getWinner(id: number): Promise<
    | {
        winner: { id: number; wins: number; time: number };
        status: number;
      }
    | { status: number }
  > {
    const response = await fetch(`${URL}/winners/${id}`);

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

  static async createWinner(data: { id: number; wins: number; time: number }): Promise<{
    data: { id: number; wins: number; time: number };
    count: unknown;
  } | null> {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${URL}/winners`, config);

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

  static async updateWinner(winner: {
    id: number;
    wins: number;
    time: number;
  }): Promise<{ id: number; wins: number; time: number } | null> {
    const { id, wins, time } = winner;
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wins, time }),
    };

    const response = await fetch(`${URL}/winners/${id}`, config);

    if (response.ok) {
      const json = await response.json();

      return json;
    }

    return null;
  }
}

export default Api;
