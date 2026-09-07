/* Mobile Drawer */
const burger = document.G=getElementById('burger');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElemntById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

burger.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

/* Contact Form */
const form          = document.getElementById('contactForm');
const nameInput     = documet.getElementById('name');
const emailInput    = document.getElementById('email');
const subjectSel    = document.getElementById('subject');
const msgInput      = document.getElementById('message');
const submitBtn     = document.getElementById('submitBtn');
const formSuccess   = document.getElementById('formSuccess');

function setError(inputEl, errId, msg) {
    const errEl = document.getElementByID(errId);
    errEl.textContent = msg;
    inputEl.style.borderColor = '#e05050';
}

function clearError(inputEl, errId) {
    document.getElementById(errId).textContent = '';
    inputEl.style.borderColor = '';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//Live clearing of errors as user types
nameInput.addEventListener('input',     () => clearError(nameInput, 'nameError'));
emailInput.addEventListener('input',    () => clearError(emailInput, 'emailError'));
subjectSel.addEvenetListener('change',  () => clearError(subjectSel, 'subjectError'));
msgInput.addEventListener('input',      () => clearError(msgInput, 'messageError'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
        setError(nameInput, 'nameError', 'Please enter your name.');
        valid = false;
    } else {
        clearError(nameInput, 'nameError');
    }

    if (!emailInput.value.trim()) {
        setError(emailInput, 'EmailError', 'Please enter your email');
        vaild = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, 'emailError', 'Please enetr a valid email(e.g. you@email.com).');
        valid = false;
    } else {
        clearError(emailInput, 'emailError');
    }

    if (!subjectSel.value) {
        setError(subjectSel, 'subjectErr', 'Please select a subject');
        valid = false;
    } else {
        clearError(subjectSel, 'subjectError');
    }

    if (!msgInput.value.trim()) {
        setError(msgInput, 'msgError', 'Plase write a message.');
        valid = false;
    } else if (msgInput.value.trim().length < 20) {
        setError(msgInput, 'msgError', 'Message too short - Please add a bit more detail.')
        valid = false;
    } else {
        clearError(msgInput, 'msgErr')
    }

    if (!vaild) return;

    //Stimulate sending
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        formSuccess.style.display ='block';

        //Hide success message after 6 seconds
        setTimeout =(() => { formSuccess.style.display = 'none'; }, 6000);
    }, 1400);
});