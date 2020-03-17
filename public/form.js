const db = firebase.firestore();
const form = document.querySelector('#add-ticket-form');


// datepicker safari support fix
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
console.log(isSafari);
if (isSafari){ //if browser doesn't support input type="date", load files for jQuery UI Date Picker
document.write('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet" type="text/css" />\n')
document.write('<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"><\/script>\n') 
}      
if (isSafari){ //if browser doesn't support input type="date", initialize date picker widget:
$(document).ready(function() {
    $('#datepicker').datepicker();
}); 
}


// saving data from form // submitting

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('tickets').add({
        Title : form.Title.value,
        TFname: form.TFname.value,
        TLname: form.TLname.value,
        SFname: form.SFname.value,
        SLname: form.SLname.value,
        Grade: form.Grade.value,
        Email: form.Email.value,
        date: form.date.value,
        department: form.department.value,
        description: form.description.value
    });
    form.Title.value = '';
    form.TFname.value = '';
    form.TLname.value = '';
    form.SFname.value = '';
    form.SLname.value = '';
    form.Grade.value = '';
    form.Email.value = '';
    form.date.value = '';
    form.department.value = '';
    form.description.value = '';
    alert("Your form has been submitted successfully, check your email for more information");
    
});


