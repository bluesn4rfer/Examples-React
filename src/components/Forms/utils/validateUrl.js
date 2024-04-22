export default function validateUrl(url){
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    return urlRegex.test(url);
}