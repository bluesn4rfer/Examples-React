export default function validateEmail(email){
    console.log('Forms/utils/validateEmail.js validateEmail() invoked');
    console.debug('Forms/utils/validateEmail.js email = '+email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}