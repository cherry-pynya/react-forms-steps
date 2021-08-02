export default function checkDist(str) {
  const reg = /[0-9]/;
  return reg.test(str);
}