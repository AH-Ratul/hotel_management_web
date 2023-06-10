//for login
const modal = document.querySelector('.model');
const close = document.querySelector('.close');
const openlogin = document.querySelector('.open-login');
const submit = document.getElementById('login-btn');

openlogin.addEventListener('click', () => {
    modal.style.display = 'block';
})

close.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
});

submit.addEventListener('click', (e) => {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    
    if(email == "") {
        alert('please enter email');
    }
    if(pass == "") {
        alert('please enter password');
    }
    else if(pass.length < 6) {
        alert('password must be at least 6 character long');
    }

    else {
        alert('login successfull....');
    }

     document.getElementById('email').value = '';
     document.getElementById('pass').value = '';
})



// for registration
const model = document.querySelector('.model1');
const cross = document.querySelector('.close1');
const openRegister = document.querySelector('.open-register');
const register = document.querySelector('.reg-btn');


openRegister.addEventListener('click', () => {
     model.style.display = 'block';
    console.log('click');
})

cross.addEventListener('click', () => {
    model.style.display = 'none';
})

window.addEventListener('click', (e) => {
	if (e.target == model) {
		model.style.display = 'none';
	}
});

register.addEventListener('click', () => {
        const Name = document.querySelector('.name').value;
        const Phone = document.querySelector('.phone').value;
        const reg_email = document.querySelector('.reg-email').value;
        const reg_pass = document.querySelector('.reg-pass').value;

        if(Name == "" || Phone == "" || reg_email == "" || reg_pass == "") {
            alert('please fill all fields properly');
        }
        else if(Phone.length < 11) {
            alert('please enter valid phone number');
            document.querySelector('.phone').value = '';
        }
        else if(reg_pass.length < 6) {
            alert('password must be at least 6 characters long')
        }
        else {
            alert('Registration Successfull..');
        }

        document.querySelector('.name').value = '';
        document.querySelector('.phone').value = '';
        document.querySelector('.reg-email').value = '';
        document.querySelector('.reg-pass').value = '';
})