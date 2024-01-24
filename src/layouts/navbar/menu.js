import tshirt from "../../assets/images/shirt.png"
export const categories = [
  {
    _id: "1",
    name: "Men's",
    iconClass: "fa-solid fa-person",
    subcategory: [
      {
        _id: "m1",
        name: "T-Shirts",
        icon: tshirt,
        type: "cloths",
      },
      { _id: "m2", name: "Shirts", icon: "fas fa-person-dress", type: "cloths" },
      { _id: "m3", name: "Pants", icon: "fas fa-pant", type: "cloths" },
      { _id: "m4", name: "Panjabi", icon: "fas fa-pant", type: "cloths" },
      {
        _id: "m4",
        name: "Accessories",
        icon: "fas fa-pant",
        type: "accessories",
      },
    ],
  },
  {
    _id: "2",
    name: "Women's",
    icon: "fa-solid fa-person-dress",
    subcategory: [
      { _id: "w1", name: "Kamiz", icon: "fas fa-tshirt", type: "cloths" },
      { _id: "w2", name: "Borkha", icon: "fas fa-shirt", type: "cloths" },
      { _id: "w3", name: "Beuty", icon: "fas fa-pant", type: "cloths" },
      {
        _id: "w4",
        name: "Accessories",
        icon: "fas fa-pant",
        type: "accessories",
      },
    ],
  },
  {
    _id: "3",
    name: "Kids",
    icon: "fa-solid fa-children",
    subcategory: [
      {
        _id: "k1",
        name: "Boy",
        icon: "fas fa-tshirt",
        children: [
          {
            _id: "kb1",
            name: "T-Shirt",
            icon: "fas fa-tshirt",
            type: "cloths",
          },
          {
            _id: "kb2",
            name: "Pants",
            icon: "fas fa-tshirt",
            type: "cloths",
          },
        ],
      },
      {
        _id: "k2",
        name: "Girl",
        icon: "fas fa-shirt",
        children: [
          {
            _id: "kg1",
            name: "Frok",
            icon: "fas fa-tshirt",
            type: "cloths",
          },
          {
            _id: "kg2",
            name: "Pants",
            icon: "fas fa-tshirt",
            type: "cloths",
          },
        ],
      },
      {
        _id: "k3",
        name: "Toys",
        icon: "fas fa-pant",
        type: "accessories",
      },
    ],
  },
];
