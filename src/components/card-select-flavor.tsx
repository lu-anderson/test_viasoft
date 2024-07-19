'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components/ui/card';
import { useAppContext } from '@/context';
import { mapPizzaFlavor } from '@/lib/contants';
import { PizzaFlavor } from '@/types';

type CardSelectFlavorProps = {
  flavor: Exclude<PizzaFlavor, undefined>;
};

export default function CardSelectFlavor({ flavor }: CardSelectFlavorProps) {
  const {
    state: { pizzaFlavor },
    dispatch,
  } = useAppContext();

  const imgUrl = mapPizzaFlavor[flavor].imgUrl;
  const additionalTime = mapPizzaFlavor[flavor].additionalTime;
  const name = mapPizzaFlavor[flavor].name;

  return (
    <button
      onClick={() => dispatch({ type: 'set_pizza_flavor', payload: flavor })}
    >
      <Card
        className={`hover:bg-secondary ${pizzaFlavor === flavor && 'bg-secondary'} h-full`}
      >
        <CardHeader>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <CardImage src={imgUrl} width={80} height={80} alt={flavor} />
        </CardContent>
        <CardFooter>
          {!!additionalTime && (
            <CardDescription>
              Tempo adicional: {additionalTime} min
            </CardDescription>
          )}
        </CardFooter>
      </Card>
    </button>
  );
}
