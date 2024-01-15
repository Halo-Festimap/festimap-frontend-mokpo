import styled from 'styled-components';
import closeImg from '../asset/Close.svg';
function InfoBox(props) {
  const handleClose = () => {
    props.setClose(true);

    setTimeout(() => {
      props.setPopup(false);
      props.setFull(false);
    }, 500);
  };
  const data = props.data;
  return (
    <div>
      <PlaceBox>
        <PlaceName>{data.name}</PlaceName>
        <PlaceType>{data.type}</PlaceType>
        <Close onClick={handleClose} src={closeImg}></Close>
      </PlaceBox>
      <DetailBox>
        <Time>{data.operationHours}</Time> <Place>{data.location}</Place>
      </DetailBox>
      <Show>{data.summary}</Show>
    </div>
  );
}

export default InfoBox;

const PlaceBox = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;
const PlaceName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
`;

const PlaceType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff5c00;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid #ffc683;
  background: #fff;
  margin-left: 6px;
  height: 22px;
  padding: 0 6px 0 6px;
`;

const Close = styled.img`
  margin-left: auto;
`;
const Time = styled.div`
  color: #333;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
`;

const Place = styled(Time)`
  color: #555;
`;

const DetailBox = styled.div`
  display: flex;
  margin-top: 4px;
`;
const Show = styled.div`
  color: #e63136;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
`;
