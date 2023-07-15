import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react';
import { ProductContainer, ProductTag } from './styles';
import coffee01 from '../../../../assets/ProductsImage/coffee01.png';
import { useState } from 'react';

export function Product() {
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
    <ProductContainer>
      <img src={coffee01} alt="" />
      <div>
        <ProductTag>Tradicional</ProductTag>
        <ProductTag>Com Leite</ProductTag>
      </div>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <footer>
        <p>
          R$ <span>9,90</span>
        </p>
        <div>
          <button onClick={handleDecrease}>
            <Minus size={14} />
          </button>
          <input
            type="number"
            value={productQuantity}
            onChange={e => handleChangeInput(parseInt(e.target.value))}
            min={1}
          />
          <button onClick={handleIncrease}>
            <Plus size={14} />
          </button>
        </div>
        <button>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </footer>
    </ProductContainer>
  );
}
