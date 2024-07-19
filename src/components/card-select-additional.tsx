'use client';
import { useAppContext } from '@/context';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '@/components/ui/card';
import { Additional } from '@/types';
import { mapAdditional } from '@/lib/contants';

type CardSelecAdditionalProps = {
  additional: Exclude<Additional, undefined>;
};

export default function CardSelecAdditional({
  additional,
}: CardSelecAdditionalProps) {
  const {
    state: { pizzaAdditional },
    dispatch,
  } = useAppContext();

  const name = mapAdditional[additional].name;
  const price = mapAdditional[additional].price;
  const time = mapAdditional[additional].time;
  const imgUrl = mapAdditional[additional].imgUrl;

  return (
    <button
      onClick={() =>
        dispatch({ type: 'set_pizza_additional', payload: additional })
      }
    >
      <Card
        className={`flex flex-col items-center justify-between hover:bg-secondary ${pizzaAdditional.includes(additional) && 'bg-secondary'} h-full`}
      >
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="">
          <CardImage src={imgUrl} alt={name} width={80} height={80} />
        </CardContent>
        <CardFooter className="flex flex-col">
          <CardDescription>R$ {price.toFixed(2)}</CardDescription>
          {time && <CardDescription>+ {time} min</CardDescription>}
        </CardFooter>
      </Card>
    </button>
  );
}
