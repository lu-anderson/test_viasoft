import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2">
      <h1 className="text-xl">Pizzaaa</h1>
      <h2 className="text-sm">Monte a pizza ideal para sua fome</h2>
      <Link
        href="/order"
        className={cn(buttonVariants({ variant: 'default' }))}
      >
        Fazer meu pedido
      </Link>
    </main>
  );
}
