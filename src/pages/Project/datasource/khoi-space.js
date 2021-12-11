import Main from "@assets/images/khoi-space/main.jpg";
import Image1 from "@assets/images/khoi-space/anh1.jpg";
import Image2 from "@assets/images/khoi-space/anh2.jpg";
import Image3 from "@assets/images/khoi-space/anh3.jpg";
import { DONE } from "@utils/constants";
const data = [
  {
    url: Main,
    name: "Khởi Space",
    time: "December 09, 2020",
    location: "162 Đê La Thành, Hà Nội",
    area: "422",
    status: DONE,
    children: [Main, Image1, Image2, Image3],
  },
];

export default data;
