import styled from 'styled-components';
import AssignThumbnail from './AssignThumbnail';
import AssignMenuBox from './AssignMenuBox';

import images_preview from 'asset/assign/input_images.png';
import { useRecoilState } from 'recoil';
import { infoState } from 'recoils/atoms_assign';

function AssignMenu() {

    //*****전역 recoil모음*****
    const [info, setInfo] = useRecoilState(infoState);
    //*****전역 recoil모음*****

  const handleAddMenu = () => {
    let tmp = [...(info.menus||[]),{image:images_preview}]
    setInfo({...info, menus:tmp});
  };
  const handleDeleteMenuBox = (menuI) => {
    const filteredMenus = info.menus?.filter((e, i) => i !== menuI);
    setInfo({...info, menus : filteredMenus});
  };


  return (
    <div style={{ width: '352px' }}>
      <AssignThumbnail/>
      <AddMenuBox onClick={handleAddMenu}>메뉴 추가하기</AddMenuBox>
      {info.menus?.map((e, i) => {
        return (
          <AssignMenuBox
            onDelete={() => handleDeleteMenuBox(i)}

            e={e}
            i={i}

            fetchedImage = {e.image}
          />
        );
      })}
    </div>
  );
}

export default AssignMenu;

const AddMenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 352px;
  height: 48px;
  border-radius: 4px;
  background: #f2f2f2;
  color: #111;

  font-size: 15px;
  font-weight: 700;
  line-height: 32px; /* 213.333% */

  margin-top: 8px;

  &:hover {
    cursor: pointer;
  }
`;