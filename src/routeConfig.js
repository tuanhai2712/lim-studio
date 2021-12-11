import Project from "@pages/Project/Project";
import DetailProject from "@pages/Project/DetailProject";

export const routes = [
  {
    title: "Dự án",
    path: "/du-an",
    component: Project,
  },
  {
    title: "Chi tiết",
    path: "/du-an/chi-tiet",
    component: DetailProject,
  },
];
