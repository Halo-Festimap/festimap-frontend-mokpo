import {useState,useEffect} from 'react'

import styled from 'styled-components';

import Assign_Info_Add from '../components/assign_info/Assign_Info_Add';
import Assign_Info_Revise from '../components/assign_info/Assign_Info_Revise';

import { FlexBox_Column, FlexBox_Row,
  GlobalStyles, StyledLink } from './Info';
  import { Wrapper, GRID_WIDTH, UpperBar, 
    Logo, FestivalSelectBox, MiddleBar,H1,next} from './AssignPage_Home';

function AssignPage_Rending() {

  const [category,setCategory]=useState('notice');

  const handleInfo = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };


  return (
    <FlexBox_Column>
        <InputBox>
          <SemiTitle>카테고리</SemiTitle>
          <Category name="category" onChange={handleInfo}>
            <option value="notice">공지사항</option>
            <option value="event">이벤트</option>
          </Category> 
        </InputBox>
        <Assign_Info_Add category={category}/>
        {/* <Assign_Info_Revise category={category}/> */}
    </FlexBox_Column>
  );
}
export default AssignPage_Rending;

export const InputBox = styled.div`
  width: 400px;
  display:flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;
export const Input = styled.input`
  height: 30px;
`;
export const SemiTitle = styled.div`
  display: flex;
  height: 30px;
`;
export const Category = styled.select`
  width: 200px;
  height: 30px;
`;
export const PlusImage = styled.button`
width:25px;
height:25px;
font-size:25px;
line-height:12.5px; //글자 위 기준으로 height가 설정됨

margin:0;
padding:0;
`;
export const ImageBox = styled.div`
width:400px;
p{
align-self:flex-start;
}
`;
export const Image = styled.img`
width:200px;
height:200px;
border:1px solid gray;
`;

