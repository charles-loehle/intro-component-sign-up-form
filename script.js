const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim white spaces from input values
	const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	// check if firstname is empty
	if (firstnameValue === '') {
		setErrorFor(firstname, 'Firstname cannot be empty');
	} else {
		setSuccessFor(firstname);
	}

  	// check if lastname is empty
	if (lastnameValue === '') {
		setErrorFor(lastname, 'lastname cannot be empty');
	} else {
		setSuccessFor(lastname);
	}

	// check if email is empty
	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
	} else {
		setSuccessFor(email);
	}

	// check if password is empty
	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	// console.log(input, message);
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	// console.log(small.innerText);
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}