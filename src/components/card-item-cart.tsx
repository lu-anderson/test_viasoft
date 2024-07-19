import { Button } from '@/components/ui/button';
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
import { mapAdditional, mapPizzaFlavor, mapPizzaSize } from '@/lib/contants';
import { OrderPizza } from '@/types';
import { Minus, Plus } from 'lucide-react';

type CardItemCartProps = {
  item: OrderPizza;
};

export default function CardItemCart({ item }: CardItemCartProps) {
  const { dispatch } = useAppContext();
  const { pizzaSize, pizzaFlavor, pizzaAdditional, quantity, id } = item;
  const imgUrl = mapPizzaFlavor[pizzaFlavor].imgUrl;
  const name = mapPizzaFlavor[pizzaFlavor].name;
  const price = mapPizzaSize[pizzaSize].price;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pizza de {name}</CardTitle>
        <CardDescription>R$ {price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <CardImage src={imgUrl} width={80} height={80} alt={name} />
        <CardDescription className="w-full">
          <div>Observações:</div>
          <ul>
            {pizzaAdditional
              .filter((add) => !!add)
              .map((add) => (
                <li key={add}>
                  <span>{mapAdditional[add].description}</span>
                  {!!mapAdditional[add].price && (
                    <span>R$ {price.toFixed(2)}</span>
                  )}
                  {mapAdditional[add].time && (
                    <span> | + {mapAdditional[add].time} min</span>
                  )}
                </li>
              ))}
          </ul>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={() =>
            dispatch({
              type: 'change_quantity_pizza',
              payload: { pizzaId: id, quantity: -1 },
            })
          }
        >
          <Minus />
        </Button>
        {quantity}
        <Button
          onClick={() =>
            dispatch({
              type: 'change_quantity_pizza',
              payload: { pizzaId: id, quantity: 1 },
            })
          }
        >
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  );
}
