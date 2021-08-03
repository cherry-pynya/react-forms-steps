export default function handleData(arr, item) {
  arr.map((el) => {
    el.date = handleDate(el.date);
  })
  item.date = handleDate(item.date);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].date === item.date) {
      arr[i].distance = (Number(item.distance) + Number(arr[i].distance)).toString();
      return arr;
    }
  }
  arr.push(item);
  arr.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });
  return arr;
}

function handleDate(str) {
  const a = str.slice(0,2);
  const b = str.slice(3,5);
  const c = str.slice(6,10);
  return new Date(`${b}/${a}/${c}`).getTime();
}