export default function validateMonth(monthString){
    const monthRegex = /^(0?[1-9]|1[0-2])$/;
    return monthRegex.test(monthString);
}