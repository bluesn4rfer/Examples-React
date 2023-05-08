export default function validateColor(colorString){
    const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
    return colorRegex.test(colorString);
}