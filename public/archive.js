const db = firebase.firestore();
const mainList = document.querySelector('#list_div');
const commentForm = document.querySelector('#add-comment-form');
const ticketList = document.querySelector('#comment-list');
var ticknum =  document.getElementById('ticketNumberCell').innerHTML;

// console.log("ticknum "+ticknum);



    function myFunction(x) {
    // var indexofrow=x.parentElement.parentElement.rowIndex;
    var iii=x.parentElement.parentElement.getAttribute('class');
    if(iii !=""){
        ticknum=iii;
    }
   
  
    // console.log("ID: " + iii);
    
    // console.log("Row index is: " + indexofrow);

    //get comments
    db.collection("archives").doc(ticknum).collection("comments").onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {

         // archivedComments.push(change.doc.data().comment);
        // console.log("archived comments: "+archivedComments);

        if(change.type === 'added'){
            renderCafe(change.doc);
        } else if (change.type === 'removed'){
            let li = ticketList.querySelector('[data-id=' + change.doc.id + ']');
            ticketList.removeChild(li);
        }
        });
        }); 


      
            }





//close ticket
  function closeRow(){
    var y = document.getElementById("Ticketcontent");
    if (y.style.display === "block") {
        y.style.display = "none";
      } 
      ticketList.innerHTML = '';

  }

 
//get ticket data 
db.collection("archives").onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            // console.log(change.doc.data());
            archivesummary(change.doc.id, change.doc.data().date,change.doc.data().TFname+" "+change.doc.data().TLname, change.doc.data().Title, change.doc.data().department);
        } else if (change.type === "removed") {

    // document.getElementById("ticketTableBody").deleteRow(x.parentElement.parentElement.rowIndex);
                    }
    });

 
});


function archivesummary(ticketNumber,ticketDate,ticketTeacherFirstName,ticketTitle,ticketDepartment){

    let table = document.getElementById("ticketTableBody");
    let row = table.insertRow();
    row.className = ticketNumber;
    let ticketNumberCell = row.insertCell(0);
    let ticketDateCell = row.insertCell(1);
    let ticketTeacherFirstNameCell = row.insertCell(2);
    let ticketTitleCell = row.insertCell(3);
    let ticketDepartmentCell = row.insertCell(4);
    let ticketAction = row.insertCell(5);

    ticketNumberCell.innerHTML = ticketNumber;
    ticketDateCell.innerHTML = ticketDate;
    ticketTeacherFirstNameCell.innerHTML = ticketTeacherFirstName;
    ticketTitleCell.innerHTML = ticketTitle;
    ticketDepartmentCell.innerHTML = ticketDepartment;
    ticketAction.innerHTML= "<button id='myBtn' onclick='myFunction(this)'  class='btn-info'>View Details</button>"; 

  
    // deleting data
    // ticketAction.addEventListener('click', (e) => {
    // e.stopPropagation();
    // let id = e.target.parentElement.parentElement.getAttribute('class');
    // console.log(id);
    // db.collection('archives').doc(id).delete();
    //     });

         // view data
    ticketAction.addEventListener('click', (e) => {
        var y = document.getElementById("Ticketcontent");
        //show div element
        if (y.style.display === "none") {
            y.style.display = "block";
          } 
    
        e.stopPropagation();
        var id = e.target.parentElement.parentElement.getAttribute('class');
        var newID;
        if(id !=null){
            newID=id;
        }
       

        // ticknum = id;
        // console.log("id "+id);
        // console.log("ticknum "+ticknum);

        ticketList.innerHTML = '';
        // console.log("new id "+id1);


       
  
        // window.open(
        //     'ticket_example.html',
        //     '_blank' // <- This is what makes it open in a new window.
        //   );

       
        var lol = db.collection('archives').doc(newID);
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
                ticketDateCell.innerHTML = ticketDate;
                ticketTitleCell.innerHTML = ticketTitle;
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
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        
   
        
            });


 
       
}

 



//comments

function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    //let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().comment;
    //cross.textContent = 'x';
    li.appendChild(name);
   // li.appendChild(cross);
    ticketList.appendChild(li);


 }


    
    
    
   
    




   

