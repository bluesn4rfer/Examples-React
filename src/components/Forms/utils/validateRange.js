export default function validateRange(number, min, max){
    if (typeof number !== 'number' || isNaN(number)) {
        return false;
    }

    if (typeof min !== 'number' || isNaN(min)) {
        return false;
    }

    if (typeof max !== 'number' || isNaN(max)) {
        return false;
    }
    return number >= min && number <= max;
}