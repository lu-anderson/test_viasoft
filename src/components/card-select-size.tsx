'use client';
import { useAppContext } from '@/context';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { mapPizzaSize } from '@/lib/contants';
import { PizzaSize } from '@/types';

type CardSelectSizeProps = {
  size: Exclude<PizzaSize, undefined>;
};

export default function CardSelectSize({ size }: CardSelectSizeProps) {
  const {
    state: { pizzaSize },
    dispatch,
  } = useAppContext();

  const price = mapPizzaSize[size].price;
  const time = mapPizzaSize[size].time;

  return (
    <button onClick={() => dispatch({ type: 'set_pizza_size', payload: size })}>
      <Card
        className={`hover:bg-secondary ${pizzaSize === size && 'bg-secondary'} w-40`}
      >
        <CardHeader>
          <CardTitle>{size?.toLocaleUpperCase()}</CardTitle>
          <CardDescription>R$ {price.toFixed(2)}</CardDescription>
        </CardHeader>
        <CardContent className=""></CardContent>
        <CardFooter>
          <CardDescription>Tempo de preparo: {time} min</CardDescription>
        </CardFooter>
      </Card>
    </button>
  );
}
