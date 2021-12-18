import Project from "@pages/Project/Project";
import DetailProject from "@pages/Project/DetailProject";
import Contact from "@pages/Contact/Contact";
import Career from "@pages/Career/Career";
import Research from "@pages/Research/Research";
import DetailResearch from "@pages/Research/DetailResearch";

export const routes = [
  {
    title: "Dự án",
    path: "/du-an",
    component: Project,
  },
  {
    title: "Dự án",
    path: "/du-an/chi-tiet",
    component: DetailProject,
  },
  {
    title: "Liên hệ",
    path: "/lien-he",
    component: Contact,
  },
  {
    title: "Tuyển dụng",
    path: "/tuyen-dung",
    component: Career,
  },
  {
    title: "Nghiên cứu",
    path: "/nghien-cuu",
    component: Research,
  },
  {
    title: "Nghiên cứu",
    path: "/nghien-cuu/chi-tiet",
    component: DetailResearch,
  },
];
