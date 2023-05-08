export default function validateDate(dateString){
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return false;
    }
    return true;
}