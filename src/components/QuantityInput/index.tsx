import { InputHTMLAttributes } from 'react';
import { Minus, Plus } from '@phosphor-icons/react';
import { QuantityInputContainer } from './styles';

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleDecrease: () => void;
  handleIncrease: () => void;
}

export function QuantityInput({
  handleDecrease,
  handleIncrease,
  ...props
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={handleDecrease}>
        <Minus size={14} />
      </button>
      <input type="number" {...props} />
      <button onClick={handleIncrease}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  );
}
