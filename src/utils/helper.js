import logo from "../assets/images/avatar-default.webp"
export const getAvatar = (url) => {
  let image = url;
  if (!image) {
    image = logo;
  }
  return image;
};
// export const getProductImage = (url) => {
//   let image = url;
//   if (!image) {
//     image = "/img/product-default.png";
//   }
//   return image;
// };
