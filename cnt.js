function storeData() {
    const firstName = document.getElementById('textInput1').value;
    const lastName = document.getElementById('textInput2').value;
    const email = document.getElementById('emailInput').value;

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    const formDataString = JSON.stringify(formData);

    localStorage.setItem('formData', formDataString);

}

function retrieveData() {
    const formDataString = localStorage.getItem('formData');

    if (formDataString) {
        const formData = JSON.parse(formDataString);

        console.log('First Name:', formData.firstName);
        console.log('Last Name:', formData.lastName);
        console.log('Email:', formData.email);
    } else {
        console.log('No data found');
    }
}

window.onload = function() {
    retrieveData();
};
