import throttle from 'lodash.throttle';


const formRef = document.querySelector('.feedback-form')
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state'

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput,500));

function onFormInput () {
   const formData = { email: emailRef.value, message: messageRef.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evn) {
    evn.preventDefault();
    if (emailRef.value && messageRef.value) {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        evn.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
}
(function dataLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    data.email ? (emailRef.value = data.email) : {};
    data.message ? (messageRef.value = data.message) : {};
  }
})();


