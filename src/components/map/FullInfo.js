import styled, { css, keyframes } from 'styled-components';
import InfoBox from './InfoBox';
import { VectorBox } from './ClickInfo';
import Up from '../../asset/up.svg';

function FullInfo(props) {
  const data = props.data;

  const handleClose = () => {
    props.setClose(true);
    setTimeout(() => {
      props.setPopup(false);
      props.setFull(false);
    }, 500);
  };

  return (
    <FullInfoContainer popup={props.popup} close={props.close}>
      <VectorBox onClick={handleClose}>
        <img src={Up} style={{ rotate: '180deg' }}></img>
      </VectorBox>
      <FullInfoBox>
        <InfoBox
          data={props.data}
          setFull={props.setFull}
          setPopup={props.setPopup}
          setClose={props.setClose}
        />
      </FullInfoBox>
      <WhiteLine />
      <DetailBox>
        <Content>{data.content}</Content>
        <DetailImgContainer>
          <div>
            <DetailImg src={data.thumbnail} style={{ marginTop: '12px' }} />
            {/* <MenuTxt>{e.name}</MenuTxt>
            <MenuTxt>{e.price.toLocaleString()}원</MenuTxt> */}
          </div>
        </DetailImgContainer>
      </DetailBox>
    </FullInfoContainer>
  );
}

export default FullInfo;

const slideDown = keyframes`
 from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100vh);
    }
`;
const slideUp = keyframes`
  from {
      transform: translateY(100vh);
    }
    to {
      transform: translateY(0);
    }
`;
const WhiteLine = styled.div`
  border-bottom: 1px solid #dadada;

  width: 100vw;
`;
const FullInfoBox = styled.div`
  width: 350px;
  margin: 10px auto 20px;
`;
const DetailImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const FullInfoContainer = styled.div`
  position: absolute;
  bottom: 0px;

  border-radius: 12px 12px 0px 0px;
  background: #fff;
  margin-top: 20px;
  width: 100vw;
  /* height: 70vh; */
  z-index: 110;
  animation: slideDown 1s;
  animation: slideUp 0.5s;

  display: ${(props) => {
    return props.popup ? '' : 'none';
  }};
  animation: ${(props) => {
    return props.close
      ? css`
          ${slideDown} ease-in-out 0.6s
        `
      : css`
          ${slideUp} ease-in-out 0.6s
        `;
  }};
`;
const DetailImg = styled.img`
  width: 350px;
`;
const DetailBox = styled.div`
  width: 350px;
  /* height: 70vh; */
  margin: 20px auto;
  overflow-y: scroll;
  scrollbar-width: none;
`;
const Content = styled.div`
  white-space: pre-wrap;
`;
