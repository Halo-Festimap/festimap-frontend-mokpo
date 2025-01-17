import styled from 'styled-components';
import closeImg from 'asset/Close.svg';
import dot from 'asset/dot.svg';
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
        {/* {data.type ? <PlaceType>{data.type}</PlaceType> : ''} */}
        {/* 태그 표현 */}
        <Close onClick={handleClose} src={closeImg}></Close>
      </PlaceBox>
      <DetailBox>
        <Time activeCategory={props.activeCategory}>{data.operationHours}</Time>
        {data.operationHours ? <Dot src={dot}></Dot> : ''}
        {props.activeCategory == 1 ? (
          <Show>{data.location}</Show>
        ) : (
          <Place>{data.location}</Place>
        )}
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
  font-family: 'NanumSquareNeo';
  font-size: 17px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px; /* 141.176% */
`;

const PlaceType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff5c00;

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
  cursor: pointer;
`;
const Time = styled.div`
  color: #07b0c7;

  font-size: 15px;
  font-weight: 500;
  line-height: 24px; /* 160% */
`;

const Place = styled(Time)`
  color: #555;
`;

const DetailBox = styled.div`
  display: flex;
`;
const Show = styled.div`
  color: #111;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

const Dot = styled.img`
  padding: 0 4px 0 4px;
`;
