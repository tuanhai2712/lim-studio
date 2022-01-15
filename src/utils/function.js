export function importAll(r) {
  const images = [];
  r.keys().map((item) => {
    return images.push({
      name: item.replace("./", ""),
      path: r(item),
    });
  });
  return images;
}
