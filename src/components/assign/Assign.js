import styled from 'styled-components';

import { Flex } from '../../asset/Style';
import { useState, useEffect } from 'react';

import Assign_latlng from './Assign_latlng';
import AssignBasicInfo from './AssignBasicInfo';
import AssignImage from './AssignImage';
import AssignBtn from './AssignBtn';
import AssignMenu from './AssignMenu';
import AssignBasicInfo_BoardOnly from './AssignBasicInfo_Board';

function Assign(props) {
  /*const [category,setCategory] = useState(props.category);
   => 이렇게 하면 하위 컴포넌트에서 렌더링이 한박자 늦게됨. 
   그냥 fucntion Assign({category})를 하던가
   props.category처럼 일일이 props.를 달아주던가 해야함 */

  const [noRender,setNoRender]=useState(false);
  console.log(props.info.menus);
  console.log('category', props.category);


  return (
    <AssignContainer>
      <AssignBtn
        itemID={props.itemID}
        info={props.info}
        setInfo={props.setInfo}
        category={props.category}
        // img={img}
        // thumbnail={thumbnail}
        // menus={menus}

        cancle={props.cancle}
        setCancle={props.setCancle}
        mode={props.mode}
        setMode={props.setMode}
        type={props.type}
      />
      <InfoContainer>
        {
        props.category != 'amenity'
        &&
        (props.category == 'store' 
        ? (
          <AssignMenu
            // menus={menus}
            // thumbnail={thumbnail}
            // setThumbnail={setThumbnail}
            // setMenus={setMenus}

            info={props.info}
            setInfo={props.setInfo}
            itemID={props.itemID}
            mode={props.mode}
            setNoRender={setNoRender}
          />
        ) : (
          <AssignImage
            // img={img}
            // setImg={setImg}
            // thumbnail={thumbnail}
            // setThumbnail={setThumbnail}

            info={props.info}
            setInfo={props.setInfo}
            itemID={props.itemID}
            mode={props.mode}
            setNoRender={setNoRender}
          />
        ))}

        {props.category == 'notice' ? (
          <AssignBasicInfo_BoardOnly
            setInfo={props.setInfo}
            setCategory={props.setCategory}
            info={props.info}
            category={props.category}
          />
        ) : (
          <AssignBasicInfo
            setInfo={props.setInfo}
            setCategory={props.setCategory}
            info={props.info}
            category={props.category}
          />
        )}
      </InfoContainer>
    </AssignContainer>
  );
}


export default Assign;

const AssignContainer = styled.div``;

const InfoContainer = styled.div`
  width: 352px;
  height: 536px;
  padding: 0;
  flex-shrink: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const InputBox = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;
export const Input = styled.input`
  padding: 0;
  margin-left: 8px;
  margin-top: 8px;
  background: #fafafa;
  height: 24px;
  width: 300px;
  border-radius: 4px;
  border: 0;

  color: #111;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */

  &::placeholder {
    display: flex;
    align-items: center;
  }
  &:focus {
    outline: none;
  }
`;
export const SemiTitle = styled.div`
  display: flex;
  height: 30px;
`;
export const Category = styled.select`
  width: 200px;
  height: 30px;
`;
export const InputLatLng = styled(Input)`
  padding: 0;
  margin: 0;
  margin-left: 4px;
  padding-left: 8px;
  width: 116px;
  height: 40px;
  flex-shrink: 0;
  background-color: ${(props) => {
    return props.disabled ? '#DDD' : '';
  }};

  color: #111;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
`;
