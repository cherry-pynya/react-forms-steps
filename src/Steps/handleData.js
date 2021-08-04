import { v4 as uuidv4 } from 'uuid';

export default function handleData(arr, item) {
  arr.map((el) => {
    if (!el.index) {
      el.index = handleDate(el.date);
    }
  })
  item.index = handleDate(item.date);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].index === item.index) {
      arr[i].distance = (Number(item.distance) + Number(arr[i].distance)).toString();
      return arr;
    }
  }
  item.id = uuidv4();
  arr.push(item);
  arr.sort((a, b) => {
    if (a.index > b.index) {
      return -1;
    }
    if (a.index < b.index) {
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