import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  NavBar,
  H1,
  CartIcon,
  CartDiv,
  CartLink,
  CartIconsLink,
  CartButton,
  CartLinkAndIconsDiv,
  MainDiv,
  TopMoviesDiv,
  BottomMoviesDiv,
  MovieDiv,
  MovieImg,
  MovieTitle,
  MoviePrice,
  AddToCartButton,
  AddedItemText,
  CartIconAndValueDiv,
  LoadingIcon
} from '../styles/styles'
import CartImg from '../assets/Group 2.svg'
import Server from '../server.json'
import AddToCartIcon from '../assets/AddToCartIcon.svg'
import SpinnerIcon from '../assets/load-spinner.svg'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [buttonColors, setButtonColors] = useState<string[]>(
    Array(6).fill('#099EDD')
  )
  const [itemsAdded, setItemsAdded] = useState<number[]>(Array(6).fill(0)) // Estado para controlar o número de itens adicionados
  const [buttonTexts, setButtonTexts] = useState<string[]>(
    Array(6).fill('ADICIONAR AO CARRINHO')
  ) // Estado para controlar o texto do botão
  const [totalItems, setTotalItems] = useState<number>(0) // Estado para controlar o total de itens no carrinho

  const history = useHistory()

  useEffect(() => {
    // Simulando um atraso de carregamento dos dados
    const delay = setTimeout(() => {
      setLoading(false) // Marca o carregamento como concluído após o atraso
    }, 1500) // Tempo de espera em milissegundos (aqui é 1.5 segundos)

    // Limpa o timeout para evitar vazamentos de memória
    return () => {
      clearTimeout(delay)
    }
  }, []) // Executa apenas uma vez após a montagem do componente

  const changeColorAndIncrement = (index: number): void => {
    setButtonColors((prevColors) => {
      const newColors = [...prevColors]
      newColors[index] =
        prevColors[index] === '#099EDD' ? '#039B00' : '#099EDD'
      return newColors
    })

    setItemsAdded((prevItems) => {
      const newItems = [...prevItems]
      const updatedItems = newItems.map((item, i) =>
        i === index ? (item === 0 ? 1 : 0) : item
      ) // Inverte o valor do item atual
      const newTotalItems = updatedItems.reduce((acc, curr) => acc + curr, 0) // Calcula o novo total de itens
      setTotalItems(newTotalItems) // Atualiza o total de itens no carrinho
      return updatedItems
    })

    setButtonTexts((prevTexts) => {
      const newTexts = [...prevTexts]
      newTexts[index] =
        itemsAdded[index] === 0 ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO' // Alterna o texto do botão
      return newTexts
    })
  }

  const handleCartClick = (): void => {
    // Verifica se algum item foi adicionado ao carrinho antes de redirecionar para a página do carrinho
    if (totalItems > 0) {
      // Envia os itens adicionados para a página do carrinho
      const selectedItems = itemsAdded.reduce((acc: any[], curr, index) => {
        if (curr > 0) {
          acc.push({ ...Server.products[index], quantity: curr })
        }
        return acc
      }, [])
      // Redireciona para a página do carrinho com os itens selecionados
      history.push({
        pathname: '/cart',
        state: { selectedItems }
      })
    } else {
      // Redireciona para a página de carrinho vazio caso nenhum item tenha sido selecionado
      history.push('/emptycart')
    }
  }

  return (
    <Container>
      <NavBar>
        <H1>WeMovies</H1>
        <CartDiv onClick={handleCartClick}>
          <CartLinkAndIconsDiv>
            <CartLink onClick={handleCartClick}>Meu Carrinho</CartLink>
            <CartIconsLink>
              {totalItems === 1 ? `${totalItems} item` : `${totalItems} itens`}
            </CartIconsLink>{' '}
          </CartLinkAndIconsDiv>
          <CartButton onClick={handleCartClick}>
            <img src={CartImg} alt="Carrinho" />
          </CartButton>
        </CartDiv>
      </NavBar>

      {loading
        ? (
        <LoadingIcon src={SpinnerIcon} alt="Loading..." />
          )
        : (
        <MainDiv>
          <TopMoviesDiv>
            {Server.products.slice(0, 3).map((product, index) => (
              <MovieDiv key={index}>
                <MovieImg src={product.image} alt={product.title} />
                <MovieTitle>{product.title}</MovieTitle>
                <MoviePrice>
                  R$
                  {product.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2
                  })}
                </MoviePrice>
                <AddToCartButton
                  style={{ backgroundColor: buttonColors[index] }}
                  onClick={() => {
                    changeColorAndIncrement(index)
                  }} // Chama a função para mudar a cor e incrementar o número de itens
                >
                  <CartIconAndValueDiv>
                    <CartIcon src={AddToCartIcon} alt="Ícone de carrinho" />
                    <span style={{ marginRight: '5px' }}>
                      {itemsAdded[index]}
                    </span>
                  </CartIconAndValueDiv>
                  {buttonTexts[index] === 'ITEM ADICIONADO'
                    ? (
                    <AddedItemText>{buttonTexts[index]}</AddedItemText>
                      )
                    : (
                        buttonTexts[index]
                      )}
                </AddToCartButton>
              </MovieDiv>
            ))}
          </TopMoviesDiv>

          <BottomMoviesDiv>
            {Server.products.slice(3, 6).map((product, index) => (
              <MovieDiv key={index}>
                <MovieImg src={product.image} alt={product.title} />
                <MovieTitle>{product.title}</MovieTitle>
                <MoviePrice>
                  R$
                  {product.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2
                  })}
                </MoviePrice>
                <AddToCartButton
                  style={{ backgroundColor: buttonColors[index + 3] }}
                  onClick={() => {
                    changeColorAndIncrement(index + 3)
                  }} // Chama a função para mudar a cor e incrementar o número de itens
                >
                  <CartIconAndValueDiv>
                    <CartIcon src={AddToCartIcon} alt="Ícone de carrinho" />
                    <span style={{ paddingRight: '5px' }}>
                      {itemsAdded[index + 3]}
                    </span>
                  </CartIconAndValueDiv>
                  {buttonTexts[index + 3] === 'ITEM ADICIONADO'
                    ? (
                    <AddedItemText>{buttonTexts[index + 3]}</AddedItemText>
                      )
                    : (
                        buttonTexts[index + 3]
                      )}
                </AddToCartButton>
              </MovieDiv>
            ))}
          </BottomMoviesDiv>
        </MainDiv>
          )}
    </Container>
  )
}

export default Home
