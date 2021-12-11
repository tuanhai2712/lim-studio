import Main from "@assets/images/lim-studio/main.jpg";
import Image1 from "@assets/images/lim-studio/anh1.jpg";
import Image2 from "@assets/images/lim-studio/anh2.jpg";
import Image3 from "@assets/images/lim-studio/anh3.jpg";
import Image4 from "@assets/images/lim-studio/anh4.jpg";
import { DOING } from "@utils/constants";
const data = [
  {
    url: Main,
    name: "Lim Studio",
    time: "October 1, 2021",
    location: "36 Láng Hạ, Hà Nội",
    area: "500",
    status: DOING,
    children: [Main, Image1, Image2, Image3, Image4],
  },
];

export default data;
