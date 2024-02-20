import styled from 'styled-components'

export const Container = styled.body`
  background: #2f2e41;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  @media screen and (max-width: 1000px) {
    overflow-y: auto;
  }
`

export const NavBar = styled.nav`
  height: 74px;
  width: 939px;
  margin-left: 275px;
  display: flex;
  justify-content: space-between;
  padding: 18px 10px 18px 10px;
  margin-bottom: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-79%, -342%);
  @media screen and (max-width: 1000px) {
    margin-left: 10px;
    width: 100%;
    height: 42px;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #2f2e41;
    margin-top: 26px;
    transform: translate(-50%, -50%);
  }
`

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  margin-top: 24.5px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-top: 10px;
  }
`

export const CartDiv = styled.div`
  width: 135.93px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin-top: 18px;
  margin-left: 702.13px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    position: relative;
  }
`
export const CartLinkAndIconsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  width: 95.95px;
  height: 38px;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-right: 0px;
    position: relative;
  }
`

export const CartLink = styled.a`
  width: 95.95px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const CartIconsLink = styled.a`
  width: 41.98px;
  height: 19px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16.34px;
  color: #999999;
  padding-bottom: 19px;
  padding-left: 53.97px;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-right: 19px;
  }
`

export const CartButton = styled.button`
  width: 31.98px;
  height: 32px;
  background-color: #2f2e41;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    margin-left: -25px;
    margin-top: -25px;
  }
`
export const CartImage = styled.img`
  width: 29.32px;
  height: 25.31px;
  padding-top: 5.69px;
  padding-left: 104.28px;
  @media screen and (max-width: 1000px) {
    margin-left: 0px;
  }
`

export const MainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 960px;
  height: 526px;
  left: 275px;
  bottom: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1000px) {
    display: block;
    height: 100vh;
    margin-top: 65px;
    width: 90%;
    max-width: 365px;
    left: 50%;
    transform: translate(
      -50%,
      -50%
    );
  }
  @media screen and (max-width: 410px) {
    MainDiv {
      left: 49%;
    }
  }
  @media screen and (max-width: 402px) {
    left: 48%;
  }
  @media screen and (max-width: 392px) {
    left: 47%;
  }
  @media screen and (max-width: 382px) {
    left: 45%;
  }
`

export const TopMoviesDiv = styled.div`
  width: 960px;
  height: 305px;
  display: grid;
  grid-template-columns: 309.33px 309.33px 309.33px;
  gap: 16px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 275px;
    margin-left: 17px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

export const BottomMoviesDiv = styled.div`
  width: 960px;
  height: 305px;
  display: grid;
  grid-template-columns: 309.33px 309.33px 309.33px;
  gap: 16px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 275px;
    margin-left: 17px;
    margin-top: 658px;
  }
`

export const MovieDiv = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 343px;
    height: 305px;
    border-radius: 4px;
    display: block;
    margin-bottom: 0px;
  }
`

export const MovieImg = styled.img`
  width: 119.1px;
  height: 152.3px;
  margin-top: 10px;
  @media screen and (max-width: 1000px) {
    left: 28%;
    position: relative;
    width: 147px;
    height: 188px;
    margin-bottom: -9px;
  }
`

export const MovieTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  height: 2px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`

export const MoviePrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 2px;
`

export const AddToCartButton = styled.button`
  background: #009edd;
  border-radius: 4px;
  width: 287.33px;
  height: 40px;
  gap: 12px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  box-sizing: border-box;
  line-height: 16.34px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 28px;
    position: relative;
    margin-top: -10px;
  }
`

export const CartIcon = styled.img`
  width: 11.42px;
  height: 11.9px;
`

export const AddedItemText = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`

export const CartIconAndValueDiv = styled.div`
  width: 24.93px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`
export const EmptyMainDiv = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 960px;
  height: 476px;
  left: 275px;
  bottom: 150px;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1000px) {
    width: 342px;
    height: 532.8px;
    bottom: 203px;
    margin-top: 65px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const EmptyH1 = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  margin-top: 64px;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const EmptyReturnButton = styled.button`
  width: 180px;
  height: 40px;
  top: 428.8px;
  left: 390px;
  border-radius: 4px;
  background-color: #009edd;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`
interface CartMainProps {
  itemCount: number
}

export const CartMain = styled.main<CartMainProps>`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 21px;
  position: absolute;
  width: 970px;
  max-height: 550px;
  overflow-y: auto;
  margin-right: -16px;
  left: 250px;
  top: 98px;
  background: #ffffff;
  border-radius: 4px;
  padding-right: 0px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(
    -50%,
    ${(props) =>
      props.itemCount === 1
        ? '-87%'
        : props.itemCount === 2
          ? '-62%'
          : '-47.5%'}
  );
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }

  @media screen and (max-width: 1000px) {
    width: 342px;
    top: 50%;
    left: 50%;
    flex-direction: column;
    margin-top: -33px;
    max-height: none;
    position: absolute;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translate(-50%, -42%);
    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const ProductH2 = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #999999;
  margin-left: 24px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const QtyH2 = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #999999;
  padding-left: 223px;
  position: static;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const SubtotalH2 = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 19.07px;
  color: #999999;
  margin-right: 250px;
`
export const MobileSubtotalH2 = styled.h2`
  @media screen and (max-width: 1000px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 19.07px;
    color: #999999;
    margin-right: 250px;
    font-size: 12px;
    position: relative;
    left: 267px;
    bottom: 131px;
  }
`

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    width: 85px;
    height: 0px;
  }
`

export const ProductImage = styled.img`
  width: 89px;
  height: 114px;
  margin-left: 24px;
  @media screen and (max-width: 1000px) {
    width: 64px;
    height: 82px;
    position: relative;
    left: -10px;
    top: 0px;
  }
`
export const TitleAndPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 253px;
  height: 58px;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  margin-left: 17px;
  padding-left: 10px;
  margin-top: -11px;
  color: #2f2e41;
  margin-right: 39px;
  p {
    margin-bottom: -15px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 14px;
    height: 100%;
    width: 300px;
    p {
      margin-bottom: 0px;
    }
  }
`
export const TitleProduct = styled.p`
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    position: relative;
    left: 250px;
    top: -85px;
  }
`

export const PriceProduct = styled.p`
  @media screen and (max-width: 1000px) {
    font-size: 16px;
    font-weight: 700;
    line-height: 74.79px;
    margin-left: 64px;
    margin-right: 61px;
    width: 100px;
    height: 30px;
    position: relative;
    top: -162px;
    left: 322px;
  }
`

export const ProductDataDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 342px;
    margin-bottom: -200px;
  }
`
export const QuantityControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`
export const QuantityInput = styled.input`
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  width: 62px;
  height: 26px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-top: -5px;
`

export const QuantityDiv = styled.div`
  display: -webkit-box;
  margin-left: 25px;
  gap: 6px;
  @media screen and (max-width: 1000px) {
    position: relative;
    top: -60px;
    right: 120px;
  }
`
export const CartH1 = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  margin-top: 24.5px;
  cursor: default;
  @media screen and (max-width: 1000px) {
    margin-top: 10px;
  }
`

export const Subtotal = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 74.79px;
  margin-left: 64px;
  margin-right: 61px;
  width: 200px;
  @media screen and (max-width: 1000px) {
    width: 80px;
    position: relative;
    bottom: 186px;
    left: 205px;
  }
`

export const StyledTrashButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  right: 24px;
  @media screen and (max-width: 1000px) {
    width: 50px;
    position: relative;
    bottom: 310px;
    left: 292px;
  }
`

export const StyledTrashIcon = styled.img`
  width: 18.31px;
  height: 18px;
  position: absolute;
  margin-left: 928px;
`
export const FooterDiv = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
  border-top: solid 1px #999999;
  padding-bottom: 22px;
  width: 930px;
  margin-left: 24px;
  
  @media screen and (max-width: 1000px) {
    &::after{
    content: '';
    display: block;
  width: 307px;
  height: 0.5px;
  margin-left: 20px;
  background-color: #999999; 
  }
  border: none;
    flex-direction: column-reverse;
    width: 342px;
    padding: 0px;
    margin-left: 0;
    position: absolute;
    height: 113px;
    bottom: -1px;
    background-color: #FFFFFF;
  }
`

export const FinishOrderButton = styled.button`
  width: 211px;
  height: 40px;
  border-radius: 4px;
  background-color: #009edd;
  font-weight: 700;
  line-height: 19.07px;
  font-size: 14px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  margin-top: 25px;
  @media screen and (max-width: 1000px) {
    position: absolute;
    bottom: 13px;
    width: 307px;
    left: 20px;
  }
`

export const TotalParagraph = styled.p`
  padding-left: 55%;
  font-weight: 700;
  font-size: 14px;
  color: #999999;
  margin-top: 3.3%;
  @media screen and (max-width: 1000px) {
    position: absolute;
    bottom: 59px;
    right: 158px;
  }
`

export const TotalValueParagraph = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #2f2e41;
  line-height: 0px;
  margin-right: 35px;
  margin-top: 4.3%;
  @media screen and (max-width: 1000px) {
    position: relative;
    top: -50%;
    left: 61%;
  }
`
export const PurchaseMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  position: absolute;
  width: 960px;
  height: 574px;
  left: 275px;
  bottom: 150px;
  border-radius: 4px;
  background-color: #ffffff;
  top: 114px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1000px) {
    width: 342px;
    height: 542.8px;
    bottom: 203px;
    margin-top: 75px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const PurchaseH1 = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  margin-top: 64px;
`

export const PurchaseButton = styled.button`
  width: 180px;
  height: 40px;
  top: 428.8px;
  left: 390px;
  border-radius: 4px;
  background-color: #009edd;
  font-weight: 700;
  line-height: 19.07px;
  font-size: 14px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  margin-top: 25px;
  @media screen and (max-width: 1000px) {
  }
`
export const LoadingIcon = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`
