export default function handleData(arr, item) {
  const isMatch = arr.find((el) => {
    return el.date === item.date
  });
  if (isMatch !== undefined) {
    // isMatch.distance = Number(isMatch.distance) + Number(item.distance);
    return arr.map((el) => {
      if (el.date === isMatch.date) {
        el.distance = Number(isMatch.distance) + Number(el.distance)
      }
    })
  }
  return false;
}