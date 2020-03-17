const db = firebase.firestore();
var showat2 = document.querySelector("#pastComments2");
var loadbutton = document.querySelector("#loadButton");
const commentForm = document.querySelector('#commentForm');
const cafeList = document.querySelector('#comment-list');

commentForm.addEventListener('submit', (e) => {
e.preventDefault();
cafeList.innerHTML = '';

db.collection("tickets").doc(commentForm.id1.value).get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        

db.collection("tickets").onSnapshot(function(snapshot) {
snapshot.docChanges().forEach(function(change) {
  if (change.type === "added") {
      // console.log(change.doc.data());
      ticketSummary(change.doc.id, change.doc.data().date,change.doc.data().TFname+" "+change.doc.data().TLname, change.doc.data().Title, change.doc.data().department);
  } else if (change.type === "removed") {

      document.getElementById("ticketTableBody").deleteRow(x.parentElement.parentElement.rowIndex);
  
  
    }
});



function ticketSummary(ticketNumber,ticketDate,ticketTeacherFirstName,ticketTitle,ticketDepartment){

var lol = db.collection('tickets').doc(commentForm.id1.value);
lol.get().then(function(doc) {
  if (doc.exists) {
      //console.log("Document data:", doc.data());
      var ticketNumberCell = document.getElementById('ticketNumberCell');
      var ticketDateCell = document.getElementById('ticketDateCell');
      var ticketTitleCell = document.getElementById('ticketTitleCell');
      var ticketContentCell = document.getElementById('ticketContentCell');
      var ticketAuthorCell = document.getElementById('ticketAuthorCell');
      var ticketDateCell = document.getElementById('ticketDateCell');
      var ticketEmailCell = document.getElementById('ticketEmailCell');
      var ticketDepartmrntCell = document.getElementById('ticketDepartmrntCell');
      var ticketStudentCell = document.getElementById('ticketStudentCell');
      var ticketGradeCell = document.getElementById('ticketGradeCell');
      
     

      ticketNumberCell.innerHTML = doc.id;
      ticketDateCell.innerHTML = doc.data().date;
      ticketTitleCell.innerHTML = doc.data().Title;
      ticketContentCell.innerHTML = doc.data().description;
      ticketAuthorCell.innerHTML = doc.data().TFname+" "+doc.data().TLname;
      ticketEmailCell.innerHTML = doc.data().Email;
      ticketDepartmrntCell.innerHTML = doc.data().department;
      ticketStudentCell.innerHTML = doc.data().SFname+" "+doc.data().SLname;
      ticketGradeCell.innerHTML = doc.data().Grade;
  } 
   
  else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      alert("Ticket ID does not exist!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});






}


});




db.collection("tickets").doc(doc.id).collection("comments").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
    console.log(change.doc.data());
    if(change.type === 'added'){
        renderCafe(change.doc);
    } else if (change.type === 'removed'){
        let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
        cafeList.removeChild(li);
    }
    });
    }); 




    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        alert("Ticket ID does not exist!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
}); 
});


function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    //let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().comment;
    //cross.textContent = 'x';
    li.appendChild(name);
   // li.appendChild(cross);
    cafeList.appendChild(li);

// // deleting data
//     cross.addEventListener('click', (e) => {
//         e.stopPropagation();
//         let id = e.target.parentElement.getAttribute('data-id');
//         db.collection("tickets").doc(id).collection("comments").delete();
//     });


 }