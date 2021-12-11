import Main from "@assets/images/gang-yu/main.jpg";
import Image1 from "@assets/images/gang-yu/anh1.jpg";
import Image2 from "@assets/images/gang-yu/anh2.jpg";
import Image3 from "@assets/images/gang-yu/anh3.jpg";
import Image4 from "@assets/images/gang-yu/anh4.jpg";
import { DONE } from "@utils/constants";
const data = [
  {
    url: Main,
    name: "GangYu",
    time: "December 09, 2020",
    location: "162 Đê La Thành, Hà Nội",
    area: "166",
    status: DONE,
    children: [Main, Image1, Image2, Image3, Image4],
  },
];
export default data;
