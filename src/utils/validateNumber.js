export const validateNumber = (number) => {
    if (isNaN(number)) {
      return false;
    }
    return true;
}  