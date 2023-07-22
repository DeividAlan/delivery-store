import { useState } from 'react';
import { OrderProductContainer, RemoveButton } from './styles';
import coffee01 from '../../../../assets/ProductsImage/coffee01.png';
import { Trash } from '@phosphor-icons/react';
import { QuantityInput } from '../../../../components/QuantityInput';

interface OrderProductProps {
  name: string;
}

export function OrderProduct({ name }: OrderProductProps) {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleDecrease = () => {
    setProductQuantity(prevState => {
      if (prevState <= 1) {
        return 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const handleIncrease = () => {
    setProductQuantity(prevState => prevState + 1);
  };

  const handleChangeInput = (value: number) => {
    if (value && value >= 1) {
      setProductQuantity(value);
    }
  };

  return (
    <OrderProductContainer>
      <div>
        <img src={coffee01} alt="" />
        <div>
          <p>{name}</p>
          <span>
            <QuantityInput
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              value={productQuantity}
              onChange={e => handleChangeInput(parseInt(e.target.value))}
              min={1}
            />
            <RemoveButton>
              <Trash size={16} />
              <p>Remover</p>
            </RemoveButton>
          </span>
        </div>
      </div>
      <span>R$ 9,90</span>
    </OrderProductContainer>
  );
}
