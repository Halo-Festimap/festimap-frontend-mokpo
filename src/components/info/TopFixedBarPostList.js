import styled, { useTheme } from 'styled-components';
import { TopFixedBar } from './TopFixedBar';

import bkBtn2 from 'asset/images/BackSpace.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { categoryState } from 'recoils/atoms';
import { MovingBar } from './MovingBar';
import { Flex } from 'asset/Style';

function TopFixedBarPostList() {
  // {category, setCategory}:
  // {category:string,
  // setCategory:React.Dispatch<React.SetStateAction<string>>}
  const theme = useTheme();

  const navigate = useNavigate();
  const ref_selectBar = useRef(null);
  //<HTMLDivElement>이거 안 하면 ref_selectBar?.current?.offsetWidth 할 때 오류남

  const [category, setCategory] = useRecoilState(categoryState);
  const [pos, setPos] = useState('');
  //애니메이션 적용할 때 그냥 빈값을 주면 초기위치 잘 찾아감

  const onClick_notice = () => {
    setCategory('notice');
    navigate('/post/notice');
  };
  const onClick_event = () => {
    setCategory('event');
    navigate('/post/event');
  };

  useEffect(() => {
    // console.log(ref_selectBar?.current?.offsetWidth);
    if (category === 'notice') setPos('25%');
    else if (category === 'event') setPos('75%');
  }, [category]); //useRef 연습

  return (
    <TopFixedBlock>
      <StyledTopFixedBar>
        <img onClick={() => navigate('/')} src={bkBtn2} />
        <h1>공지사항 / 이벤트</h1>
      </StyledTopFixedBar>
      <SelectBar ref={ref_selectBar}>
        <h1 onClick={onClick_notice}>공지사항</h1>
        <h2 onClick={onClick_event}>이벤트</h2>
        <MovingBar fontColor={theme.colors.fontColor} left={pos} />
      </SelectBar>
    </TopFixedBlock>
  );
}

export default TopFixedBarPostList;

export const TopFixedBlock = styled(Flex)`
  width: 100%;
  @media screen and (min-width: 450px) {
    width: 390px;
  }
  position: fixed;
  flex-direction: column;
`;

export const StyledTopFixedBar = styled(TopFixedBar)`
  position: relative;
  height:48px;
  background-color: black;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    font-family: 'NanumSquareNeo';
  }

  img{
    margin-left:16px;
    cursor:pointer;
  }
`;


export const SelectBar = styled.div`
  position: relative;

  width: 100%;
  height: 46px;
  flex-shrink: 0;

  border-bottom: 1px solid #555;
  background: #111;

  h1 {
    position: absolute;
    left: 25%;
    top: 50%;
    transform: translate(-50%, -50%);

    color: white;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 150% */
    font-family: 'NanumSquareNeo';

    cursor: pointer;
  }

  h2 {
    position: absolute;
    left: 75%;
    top: 50%;
    transform: translate(-50%, -50%);

    color: white;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 150% */
    font-family: 'NanumSquareNeo';

    cursor: pointer;
  }
`;

export const SelectBarBlank = styled(SelectBar)`
  background-color: transparent;
`;
