'use client';
import { useAppContext } from '@/context';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type ButtonNextProps = {
  currentPage: string;
};

export default function ButtonNext({ currentPage }: ButtonNextProps) {
  const { state } = useAppContext();
  const { pizzaFlavor, pizzaSize } = state;

  function checkGoNext() {
    if (!!pizzaFlavor && !!pizzaSize) return false;

    return true;
  }

  const disabled = currentPage === 'order' ? checkGoNext() : false;

  return (
    <Button disabled={disabled}>
      <Link href={currentPage === 'order' ? '/order/additional' : '/cart'}>
        Continuar
      </Link>
      <ChevronRight />
    </Button>
  );
}
