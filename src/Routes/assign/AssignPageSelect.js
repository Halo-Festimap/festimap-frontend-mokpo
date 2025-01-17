import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Wrapper } from 'Routes/assign/AssignPageHome';
import {
  UpperBarComponent,
  MiddleBarComponent1,
} from 'components/assign/AssignBar';
import { useSetRecoilState } from 'recoil';
import { categoryState_assign, typeState } from 'recoils/atoms_assign';

function AssignPageSelect() {
  // const festivalId = useParams().id;
  const festivalId = 1;
  const navigate = useNavigate();
  //*****전역 recoil모음*****
  const setCategory = useSetRecoilState(categoryState_assign);
  const setType = useSetRecoilState(typeState);
  //*****전역 recoil모음*****

  useEffect(() => {

    if (!localStorage.getItem('token')) {

      alert('어드민 로그인이 필요한 서비스입니다.');
      navigate('/assign_login');
    }
    setCategory('');
    setType('');
  }, []);
  // 이전 category에 대한 fetchList가 뒤늦게 실행되어서
  // 이전 카테고리에 대한 내용이 나오는 오류에 대한 방지

  /* 
  (notice페이지에 들어온 상황)
  이전 category : concert
  현재 category : notice

  1. setCategory로 category를 notice로 바꾸기도 전에
  fetchList(concert) 먼저 수행

  2. category가 notice로 바뀌고 나서
  fetchList(notice) 수행

  3. 근데 axois도 비동기 수행, response통신 받는 걸 notice부터 성공
  notice에 대한 setBoardList() 수행

  4. 이후 concert가 resopnse를 뒤늦게 받고, 
  concert에 대한 setBoardList() 뒤늦게 수행

  5. 대환장파티 (3번 4번 과정의 비동기에서 누가 먼저 통신을 성공할 지가 랜덤이라 오류 발생)
  */

  return (
    <Wrapper>
      <UpperBarComponent />
      <MiddleBarComponent1 />
      <MainBox>
        <Link to={`/assign_map/${festivalId}`}>
          <PageBtn>
            <h1>축제 지도</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign_post/${festivalId}`}>
          <PageBtn>
            <h1>공지사항/이벤트</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign_lost/${festivalId}`}>
          <PageBtn>
            <h1>분실물 리스트</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign_missing/${festivalId}`}>
          <PageBtn>
            <h1>실종자 현황 관리</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign`}>
          <PageBtn>
            <h1>휠체어</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign`}>
          <PageBtn>
            <h1>배리어프리존</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign_urgent/${festivalId}`}>
          <PageBtn>
            <h1>긴급공지/팝업</h1>
          </PageBtn>
        </Link>

        <Link to={`/assign_inquiry`}>
          <PageBtn>
            <h1>목포 PC 문의사항</h1>
          </PageBtn>
        </Link>
      </MainBox>
    </Wrapper>
  );
}

export default AssignPageSelect;

export const MainBox = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 32px;
  //grid에서 gap정하면 전체크기가 커져버림
`;
export const PageBtn = styled.div`
  position: relative;

  width: 240px;
  height: 64px;
  flex-shrink: 0;

  border-radius: 4px;
  border: 1px solid #dadada;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid #4f33f6;
  }

  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
`;
