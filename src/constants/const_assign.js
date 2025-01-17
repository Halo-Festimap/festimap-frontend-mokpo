import thumbnail_preview from 'asset/assign/thumbnail_preview.png';
import thumbnail_preview2 from 'asset/assign/thumbnail_preview2.png';
import thumbnail_preview_missing from 'asset/assign/thumbnail_preview_missing.png';

export const GRID_WIDTH = 1120;

export const mapCategory = {
    concert: '콘서트',
    booth: '관광지',
    mapCategory: [
        {
            kor: '관리자',
            eng: 'MANAGER',
        },
        {
            kor: '관광안내소',
            eng: 'INFO',
        },
        {
            kor: '편의점',
            eng: 'SHOP',
        },
        {
            kor: '화장실',
            eng: 'TOILET',
        },
        {
            kor: '흡연장',
            eng: 'SMOKING',
        },
        {
            kor: '주차장',
            eng: 'PARKING',
        },
    ],
};

export const postCategory = {
    notice: [
        {
            kor: '공지사항',
            eng: 'NOTICE',
        },

        {
            kor: '이벤트',
            eng: 'EVENT',
        },
    ],
};

export const lostItemCategory = {
    lostItem: '분실물',
};

export const missingPersonCategory = {
    missingPerson: '실종자',
};

export const wheelChairCategory = {
    wheelChair: '휠체어',
};

export const barrierFreeCategory = {
    barrierFree: '배리어프리존',
};

export const urgentCategory = {
    urgent: '긴급공지/팝업',
};

export const mapFormBlank = {
    tag: '',
    name: '',
    summary: '',
    subtitle: '',
    content: '',
    latitude: 0,
    longitude: 0,
    location: '',
    isOperation: true,
    operationHours: '',

    thumbnail: thumbnail_preview,
    images: [],
};

export const mapCategoryFormBlank = {
    id: '',
    name: '',
    summary: '',
    content: '',
    latitude: 0,
    longitude: 0,
    location: '',
    isOperation: true,
    operationHours: '',
    type: '',

    thumbnail: thumbnail_preview,
    images: [],
    menus: [],
};

export const postFormBlank = {
    title: '',
    subtitle: '',
    content: '',
    type: '',

    thumbnail: thumbnail_preview,
    images: [],
};

export const lostItemFormBlank = {
    name: '',
    type: '',
    findDate: '',

    thumbnail: thumbnail_preview2,
};

export const missingPersonFormBlank = {
    name: '',
    age: '',
    gender: '',
    thumbnail: thumbnail_preview_missing,

    missingLocation: '',
    missingTime: '',

    content: '',
    parentName: '',
    parentNo: '',
    popup: false,
};

export const urgentFormBlank = {
    title: '',
    content: '',
};
