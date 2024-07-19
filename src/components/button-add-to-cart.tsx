'use client';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';

export default function ButtonAddToCart() {
  const { dispatch } = useAppContext();
  const router = useRouter();

  function handleAddToCart() {
    dispatch({ type: 'add_pizza_to_cart' });
    router.push('/cart');
  }
  return (
    <Button onClick={handleAddToCart}>
      Adicionar ao carrinho <ChevronRight />
    </Button>
  );
}
