import styled from 'styled-components';
import { assignApi, assignMenuApi, reviseApi } from '../../apis/apis';
import { Flex } from 'asset/Style';

function AssignBtn(props) {
  const festivalId = 1;
  console.log(props);

  const assignBoard = () => {
    let tmp = window.confirm("추가하시겠습니까?");

    if (tmp)
      assignApi(props.info, 
    props.category, 
    props.img, 
    props.thumbnail,
    festivalId)
        .then((response) => {
          if (typeof(response.data)==='string') {
            console.log("response.data : ", response.data);
            alert("해당 항목이 성공적으로 추가되었습니다");
            props.setMode("f");
          }
          else
            console.log("no response.data ;(");
        })
        .catch((error) => {
          console.log('postData error : ', error);
        })
  }
  const assignMarker = () => {
    let tmp = window.confirm("추가하시겠습니까?");

    if (tmp)
      assignApi(props.info, 
    props.category, 
    props.img, 
    props.thumbnail,
    festivalId)
        .then((res) => {
          if (res.data.storeId) {
            console.log(res.data.storeId);
            assignMenuApi(res.data.storeId, props.menus)
              .then((res) => {
                console.log("res.data(menu) : ", res.data);
                alert('해당 항목이 성공적으로 추가되었습니다.');
                props.setMode("f");
              })
              .catch((err) => {
                alert('메뉴를 다시 추가해주십시오.');
              });
          } else {
            console.log("res.data(not menu) : ", res.data);
            alert('해당 항목이 성공적으로 추가되었습니다.');
            props.setMode("f");
          }
        })
        .catch((err) => {
          alert(err.data);
        });
  };

  const reviseBoard = (id) => {
    reviseApi(props.info, props.category, props.img, props.thumbnail)
      .then((response) => {
        if (response.data.length > 0) {
          console.log("response.data : ", response.data);
          alert("수정되었습니다");
        }
        else
          console.log("no response.data ;(");
      })
      .catch((error) => {
        console.log('postData error : ', error);
      })
  }
  const reviseMarker = (id) => {
    reviseApi(props.info, props.category, props.img, props.thumbnail)
      .then((res) => {
        if (res.data.storeId) {
          console.log(res.data.storeId);
          assignMenuApi(res.data.storeId, props.menus)
            .then((res) => {
              alert('수정되었습니다.');
            })
            .catch((err) => {
              alert('메뉴를 다시 수정해주십시오.');
            });
        } else {
          alert('수정되었습니다.');
        }
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  const onClick_cancle = () => {
    props.setCancle(true);
    props.setMode("");
  }

  return (
    <Flex>
      <Button onClick={onClick_cancle} cancle={true}>취소하기</Button>

      {props.mode == 'a'
        ?
        props.category == 'notice'
          ?
          <Button onClick={assignBoard}>추가하기</Button>
          :
          <Button onClick={assignMarker}>추가하기</Button>
        :
        props.category == 'notice'
          ?
          <Button onClick={() => reviseBoard(props.id)}>수정하기</Button>
          //onClick함수에 인자넣는 함수를 넣을 때 화살표함수로 넣을 것
          :
          <Button onClick={() => reviseMarker(props.id)}>수정하기</Button>
      }
    </Flex>
  );
}

export default AssignBtn;

const Button = styled.button`
  width: 172px;
  height: 48px;
  border-radius: 4px;
  background: #4f33f6;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 32px; /* 213.333% */
  &:hover {
    cursor: pointer;
  }
  border: 0;

  ${(props) => {
    return props.cancle
      ? 'color: #111; background: #F2F2F2;'
      : 'margin-left: 8px';
  }}
`;
