const inputs = document.querySelectorAll('input');

const regEx = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  telephone: /^\d{11}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/
}

// validate function
function validate(field, regex) {
  console.log(regex.test(field.value));

  if(regex.test(field.value) == true) {
    // field.className = 'valid';
    field.classList.add('valid');
    field.classList.remove('invalid');
  } else {
    // field.className = 'invalid';
    field.classList.add('invalid');
    field.classList.remove('valid');
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value);
    // validate(e.target, regEx[e.target.attributes.name.value]);
    validate(e.target, regEx[e.target.name]);

  });
})

