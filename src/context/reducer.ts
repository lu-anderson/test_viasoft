import { AppState, Action, Additional } from '@/types';

function handleAdditional(state: AppState, additional: Additional) {
  if (state.pizzaAdditional.includes(additional)) {
    return state.pizzaAdditional.filter((item) => item !== additional);
  }

  return [...state.pizzaAdditional, additional];
}

export default function reducer(state: AppState, action: Action) {
  switch (action.type) {
    case 'set_pizza_size':
      return {
        ...state,
        pizzaSize: action.payload,
      };
    case 'set_pizza_flavor':
      return {
        ...state,
        pizzaFlavor: action.payload,
      };
    case 'set_pizza_additional':
      return {
        ...state,
        pizzaAdditional: handleAdditional(state, action.payload),
      };
    case 'add_pizza_to_cart': {
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: state.cart.length,
            pizzaSize: state.pizzaSize,
            pizzaFlavor: state.pizzaFlavor,
            pizzaAdditional: state.pizzaAdditional,
            quantity: 1,
          },
        ],
      };
    }
    case 'change_quantity_pizza': {
      return {
        ...state,
        cart: state.cart.map((orderPizza) => {
          if (orderPizza.id !== action.payload.pizzaId) {
            return orderPizza;
          }

          return {
            ...orderPizza,
            quantity: Math.max(
              0,
              orderPizza.quantity + action.payload.quantity,
            ),
          };
        }),
      };
    }
    default:
      throw new Error('Unknown action.');
  }
}
