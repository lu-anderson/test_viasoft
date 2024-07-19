export type PizzaSize = 'p' | 'm' | 'g' | undefined;
export type PizzaFlavor = 'marguerita' | 'pepperoni' | 'portuguese' | undefined;
export type Additional = 'bacon' | 'no-onion' | 'border' | undefined;

export type AdditionalArray = [Additional?, Additional?, Additional?];

export type OrderPizza = {
  id: number;
  quantity: number;
  pizzaSize: Exclude<PizzaSize, undefined>;
  pizzaFlavor: Exclude<PizzaFlavor, undefined>;
  pizzaAdditional: AdditionalArray;
};

export type Action =
  | {
      type: 'set_pizza_size';
      payload: PizzaSize;
    }
  | {
      type: 'set_pizza_flavor';
      payload: PizzaFlavor;
    }
  | {
      type: 'set_pizza_additional';
      payload: Additional;
    }
  | {
      type: 'add_pizza_to_cart';
    }
  | {
      type: 'change_quantity_pizza';
      payload: {
        pizzaId: number;
        quantity: number;
      };
    };

export type AppState = {
  pizzaSize: PizzaSize;
  pizzaFlavor: PizzaFlavor;
  pizzaAdditional: AdditionalArray;
  cart: OrderPizza[];
  totalPrice: number;
  totalTime: number;
};

export type AppContext = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};
