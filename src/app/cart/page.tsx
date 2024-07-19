'use client';

import { useAppContext } from '@/context';
import CardItemCart from '@/components/card-item-cart';
import { Button } from '@/components/ui/button';
import { AppState } from '@/types';
import { mapAdditional, mapPizzaFlavor, mapPizzaSize } from '@/lib/contants';
import Link from 'next/link';

export default function Cart() {
  const { state } = useAppContext();

  function calcTotalPrice(state: AppState) {
    return state.cart.reduce((acc, curr) => {
      const additionalPrices = curr.pizzaAdditional
        .filter((add) => !!add)
        .map((add) => mapAdditional[add].price) as number[];

      const totalAdditional = additionalPrices.reduce(
        (acc, curr) => acc + curr,
        0,
      );

      return (
        acc +
        mapPizzaSize[curr.pizzaSize].price * curr.quantity +
        totalAdditional * curr.quantity
      );
    }, 0);
  }

  function calcTotalTime(state: AppState) {
    let pizzaWithLongestPrepTime = 0;
    state.cart.forEach((pizza) => {
      const additionalTime = pizza.pizzaAdditional
        .filter((add) => !!add)
        .map((add) => mapAdditional[add].time) as number[];

      const totalAdditionalTime = additionalTime.reduce(
        (acc, curr) => acc + curr,
        0,
      );

      const flavorTime = mapPizzaFlavor[pizza.pizzaFlavor].additionalTime;

      const pizzaPrepTime =
        totalAdditionalTime + mapPizzaSize[pizza.pizzaSize].time + flavorTime;

      if (pizzaWithLongestPrepTime < pizzaPrepTime) {
        pizzaWithLongestPrepTime = pizzaPrepTime;
      }
    });

    return pizzaWithLongestPrepTime;
  }
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-2">
      <h1>Total: R$ {calcTotalPrice(state).toFixed(2)}</h1>
      <h2>Tempo de preparo: {calcTotalTime(state)} min</h2>
      {state.cart.map((itemCart) => (
        <CardItemCart key={itemCart.id} item={itemCart} />
      ))}
      <Button asChild>
        <Link href="/order">Adicionar mais pizzas</Link>
      </Button>
      <Button>Finalizar pedido</Button>
    </main>
  );
}
