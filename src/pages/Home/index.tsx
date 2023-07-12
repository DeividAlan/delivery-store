import { BannerContainer, DeliveryInfo, HomeContainer } from './stules';
import bannerImage from '../../assets/banner-image.png';
import { ShoppingCart } from '@phosphor-icons/react';

export function Home() {
  return (
    <HomeContainer>
      <BannerContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <DeliveryInfo statusColor="yellow-dark">
              <ShoppingCart weight="fill" size={32} />
              Compra simples e segura
            </DeliveryInfo>
            <DeliveryInfo statusColor="base-text">
              <ShoppingCart weight="fill" size={32} />
              Embalagem mantém o café intacto
            </DeliveryInfo>
            <DeliveryInfo statusColor="yellow">
              <ShoppingCart weight="fill" size={32} />
              Entrega rápida e rastreada
            </DeliveryInfo>
            <DeliveryInfo statusColor="purple">
              <ShoppingCart weight="fill" size={32} />O café chega fresquinho
              até você
            </DeliveryInfo>
          </div>
        </div>
        <img src={bannerImage} alt="coffee" />
      </BannerContainer>
    </HomeContainer>
  );
}
