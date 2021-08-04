export default function deleteData(data, obj) {
    const item = data.find((el) => el.id === obj.id);
    data.splice(data.indexOf(item), 1);
    return data;
}