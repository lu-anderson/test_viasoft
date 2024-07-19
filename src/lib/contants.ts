export const pizzasSize = ['p', 'm', 'g'] as const;
export const pizzasFlavor = ['marguerita', 'pepperoni', 'portuguese'] as const;
export const additional = ['bacon', 'no-onion', 'border'] as const;

export const mapPizzaSize = {
  p: { price: 20.2, time: 15 },
  m: { price: 30.3, time: 20 },
  g: { price: 40, time: 25 },
} as const;

export const mapPizzaFlavor = {
  pepperoni: {
    name: 'Calabresa',
    additionalTime: 0,
    imgUrl: '/pepperoni.svg',
  },
  marguerita: {
    name: 'Marguerita',
    additionalTime: 0,
    imgUrl: '/marguerita.svg',
  },
  portuguese: {
    name: 'Portuguesa',
    additionalTime: 5,
    imgUrl: '/portuguese.svg',
  },
} as const;

export const mapAdditional = {
  bacon: {
    name: 'Bacon',
    description: 'Adicional de bacon',
    price: 3,
    time: 0,
    imgUrl: '/bacon.png',
  },
  'no-onion': {
    name: 'Sem cebola',
    description: 'Retirar a cebola',
    price: 0,
    time: 0,
    imgUrl: '/onion.png',
  },
  border: {
    name: 'Borda recheada',
    description: 'Adicional de borda',
    price: 5,
    time: 5,
    imgUrl: '/border.png',
  },
} as const;
