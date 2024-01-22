import {useState,useEffect} from 'react'
import {Link, useNavigate, 
  useParams, useLocation} from 'react-router-dom';

import styled from 'styled-components';

import Assign_Info_Add from '../components/assign_info/Assign_Info_Add';
import Assign_Info_Revise from '../components/assign_info/Assign_Info_Revise';

import { FlexBox_Column, FlexBox_Row,
GlobalStyles, StyledLink } from './Info';
import { Wrapper, GRID_WIDTH, UpperBar_Component, 
  Logo, FestivalSelectBox, MiddleBar,H1,next, MiddleBar_Component2} from './AssignPage_Home';





function AssignPage_Select() {
  const navigate=useNavigate();
  const id_param = useParams().id;
  // const URL = useLocation();

  const [festival, setFestival]=useState("");
  // console.log("URL : ",URL.pathname);

  const onChange_select = (event) => {
    event.preventDefault();
    setFestival(event.currentTarget.value);
  }
  //select태그에서 사용하기 (포커스처리인 onBlur 활용)
  //(뭘 선택하자마자 애니메이션 발생하게 하는건 힘듬. 그냥 select자체의 포커스 여부에만 집중해야함)

  return (
   <Wrapper style={{height:'800px'}}>
      <GlobalStyles/>
       <UpperBar_Component/>
        {/* <FestivalSelectBox>
          <select 
          onChange={onChange_select}>
            <option value="세종대학교">세종대학교</option>
            <option value="성균관대학교">성균관대학교</option>
            <option value="기리보이">기리보이</option>
            <option value="비와이">비와이</option>
          </select>
          <img src={dropDown2}/>
        </FestivalSelectBox> */}
        <MiddleBar_Component2 id_param={id_param}/>
        <MainBox>
          <StyledLink to={`/assign_rending/${id_param}`}>
            <PageBtn><h1>랜딩관리 페이지</h1></PageBtn>
          </StyledLink>
          
          <StyledLink to={`/assign_map/${id_param}`}>
            <PageBtn><h1>지도관리 페이지</h1></PageBtn>
          </StyledLink>

          <StyledLink to={`/assign_performance/${id_param}`}>
            <PageBtn><h1>공연관리 페이지</h1></PageBtn>
          </StyledLink>

          <StyledLink to={`/assign_notice/${id_param}`}>
            <PageBtn><h1>공지관리 페이지</h1></PageBtn>
          </StyledLink>
        </MainBox>
   </Wrapper>
  );
}

export default AssignPage_Select;


export const MainBox = styled.div`
position:absolute;
left:50%;
top:${GRID_WIDTH*0.15}px;
transform:translate(-50%,0);

display:grid;
grid-template-rows: repeat(2,1fr);
grid-template-columns:repeat(2,1fr);
gap:32px;
//grid에서 gap정하면 전체크기가 커져버림
`;
export const PageBtn = styled.div`
position:relative;

width: 448px;
height: 256px;
flex-shrink: 0;

border-radius: 8px;
background-color:#4F33F6;
opacity:0.8;

&:hover{
  opacity:0.6;
}

h1{
position:absolute;
left:32px;
top:32px;

height:32px;

color: white;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 800;
line-height: 32px; /* 133.333% */
}
`;