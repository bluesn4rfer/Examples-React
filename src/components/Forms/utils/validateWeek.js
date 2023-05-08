export default function validateWeek(weekString) {
    const weekRegex = /^([1-9]|[1-4]\d|5[0-3])$/;
    return weekRegex.test(weekString);
}