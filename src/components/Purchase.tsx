import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  NavBar,
  H1,
  CartDiv,
  CartLink,
  CartIconsLink,
  CartButton,
  CartLinkAndIconsDiv,
  PurchaseMain,
  PurchaseH1,
  PurchaseButton
} from '../styles/styles'
import PurchaseIcon from '../assets/PurchaseIcon.svg'
import CartImg from '../assets/Group 2.svg'

const Purchase: React.FC = () => {
  const history = useHistory()
  const handleReturnClick = (): void => {
    history.push('/')
  }
  return (
    <Container>
      <NavBar>
        <H1 onClick={handleReturnClick}>WeMovies</H1>
        <CartDiv>
          <CartLinkAndIconsDiv>
            <CartLink>Meu Carrinho</CartLink>
            <CartIconsLink>0 itens</CartIconsLink>
          </CartLinkAndIconsDiv>
          <CartButton>
            <img src={CartImg} />
          </CartButton>
        </CartDiv>
      </NavBar>
      <PurchaseMain>
        <PurchaseH1>Compra realizada com sucesso!</PurchaseH1>
        <img src={PurchaseIcon} />
        <PurchaseButton onClick={handleReturnClick}>VOLTAR</PurchaseButton>
      </PurchaseMain>
    </Container>
  )
}

export default Purchase
