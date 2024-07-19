import ButtonAddToCart from '@/components/button-add-to-cart';
import CardSelecAdditional from '@/components/card-select-additional';
import { additional } from '@/lib/contants';

export default function AdditionalPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-xl">Sua pizza do seu jeito!</h1>
      <div className="flex w-screen flex-col items-center gap-2 overflow-x-scroll p-10">
        <h2>Adicione ou retire algo</h2>
        <div className="flex w-screen gap-2 overflow-x-scroll p-10">
          {additional.map((add) => (
            <CardSelecAdditional key={add} additional={add} />
          ))}
        </div>
      </div>
      <ButtonAddToCart />
    </main>
  );
}
