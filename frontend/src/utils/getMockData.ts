import TCategory from "../types/TCategory.ts";

function getMockData(): TCategory[] {
  return [
    {
      id: 1,
      name: "커피",
      menus: [
        {
          id: 1,
          name: "아메리카노",
          price: 4000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 1,
        },
        {
          id: 2,
          name: "카페모카",
          price: 4500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 1,
        },
        {
          id: 3,
          name: "에스프레소",
          price: 3000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 1,
        },
        {
          id: 4,
          name: "콜드브루",
          price: 3500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 1,
        },
      ],
    },
    {
      id: 2,
      name: "라떼",
      menus: [
        {
          id: 6,
          name: "바닐라라떼",
          price: 4500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 2,
        },
        {
          id: 5,
          name: "카페라떼",
          price: 4000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 2,
        },
        {
          id: 7,
          name: "오곡라떼",
          price: 3000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 2,
        },
        {
          id: 8,
          name: "고구마라떼",
          price: 3500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 2,
        },
      ],
    },
    {
      id: 3,
      name: "티",
      menus: [
        {
          id: 9,
          name: "녹차",
          price: 4000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 3,
        },
        {
          id: 10,
          name: "페퍼민트",
          price: 4500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 3,
        },
        {
          id: 11,
          name: "우롱차",
          price: 3000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 3,
        },
        {
          id: 12,
          name: "캐모마일",
          price: 3500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 3,
        },
      ],
    },
    {
      id: 4,
      name: "쥬스",
      menus: [
        {
          id: 16,
          name: "사과쥬스",
          price: 3500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 4,
        },
        {
          id: 13,
          name: "오렌지쥬스",
          price: 4000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 4,
        },
        {
          id: 14,
          name: "포도쥬스",
          price: 4500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 4,
        },
        {
          id: 15,
          name: "키위쥬스",
          price: 3000,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 4,
        },
      ],
    },
    {
      id: 5,
      name: "디카페인",
      menus: [
        {
          id: 17,
          name: "아메리카노(디카프)",
          price: 3500,
          image:
            "https://kiosk-coffee.s3.ap-northeast-2.amazonaws.com/kiosk_coffee.png",
          categoryId: 5,
        },
      ],
    },
  ];
}
export default getMockData;
