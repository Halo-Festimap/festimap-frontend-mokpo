import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Wrapper, TopFixedDiv, Title, BkBtn } from '../Home';
// import {eventList,noticeList} from '../components/info/DataBase';

import { getAll } from '../../apis/apis';

import Notice from '../../components/info/Notice';
import { UpperBar } from '../Home';

function FestivalNotice() {
  const navigate = useNavigate();

  const festivalId = 1;

  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('gray');
  const [transForm, setTransForm] = useState('-92.5px');
  const [showNotice, setShoeNotice] = useState(true);

  const [eventList, setEventList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);

  const fetchList = (category) => {
    let type = '';
    getAll(festivalId, category, type)
      .then((response) => {
        if (response.data) {
          // console.log('fetch List success', response.data);
          if (category === 'notice') setNoticeList(response.data);
          else if (category === 'event') setEventList(response.data);
        } else {
          // console.log('fetch List no data ;(', response);
          if (category === 'notice') setNoticeList([]);
          else if (category === 'event') setEventList([]);
        }
      })
      .catch((error) => {
        // console.log('fetch List error', error);
      });
  };
  const onClick_bkBtn = () => {
    navigate(-1);
    //그냥 뒤로가는 기능
  };

  useEffect(() => {
    fetchList('notice');
    fetchList('event');
  }, []);

  return (
    <Wrapper>
      <TopFixedDiv>
        <UpperBar>
          <BkBtn onClick={onClick_bkBtn}></BkBtn>
          <Title>공지사항</Title>
        </UpperBar>
      </TopFixedDiv>

      <MainBlock style={{ marginTop: '50px' }}>
        <Notice noticeList={noticeList} />
      </MainBlock>
    </Wrapper>
  );
}

export default FestivalNotice;

const UnderBar = styled.div`
  transform: translateX(${(props) => props.transForm});
`;
const SecondBtn = styled.div`
  color: ${(props) => props.color};
`;

const MainBlock = styled.div`
  width: 100vw;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

//For Notice/Event.js//For Notice/Event.js//For Notice/Event.js//For Notice/Event.js
export const ImageDiv = styled.div`
  background-image: url(${(props) => props.url});
`;
export const TextDiv = styled.div``;
export const Section = styled.div`
  width: 350px;
  margin-top: ${(props) => props.marginTop || 0};
  margin-bottom: 12px;
  cursor: pointer;

  ${ImageDiv} {
    width: 350px;
    height: 350px;
    flex-shrink: 0;
    border-radius: 12px 12px 0px 0px;
    background-size: cover;
  }
  ${TextDiv} {
    box-sizing: border-box;
    width: 350px;
    flex-shrink: 0;
    background-color: #222;
    border-radius: 0px 0px 12px 12px;

    padding: 12px;
    h1 {
      color: #fff;

      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      margin: 0;
      margin-bottom: 4px;
    }
    h2 {
      color: #ddd;

      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      margin: 0;
    }
  }
`;
