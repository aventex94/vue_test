export default function (data) {
    let formData = new FormData();
    for (const prop in data) {
        formData.append(prop, data[prop]);
    }
    return formData
}