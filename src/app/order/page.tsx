import ButtonNext from '@/components/button-next';
import CardSelectFlavor from '@/components/card-select-flavor';
import CardSelectSize from '@/components/card-select-size';
import { pizzasFlavor, pizzasSize } from '@/lib/contants';

export default function OrderPage() {
  return (
    <main className="flex w-screen flex-col items-center justify-center gap-2 p-20">
      <h1 className="text-2xl font-bold">Vamos começar pelo básico!</h1>
      <div className="flex flex-col items-center gap-2 rounded-sm border p-10">
        <h2>Qual é o tamanho da sua fome?</h2>
        <div className="flex w-screen gap-2 overflow-x-scroll p-10">
          {pizzasSize.map((pizzaSize) => (
            <CardSelectSize key={pizzaSize} size={pizzaSize} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 rounded-sm border p-10">
        <h2>Qual o sabor da sua pizza?</h2>
        <div className="flex w-screen gap-2 overflow-x-scroll p-10">
          {pizzasFlavor.map((flavor) => (
            <CardSelectFlavor key={flavor} flavor={flavor} />
          ))}
        </div>
      </div>
      <div>
        <ButtonNext currentPage="order" />
      </div>
    </main>
  );
}
