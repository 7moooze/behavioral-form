const db = firebase.firestore();
const mainList = document.querySelector('#list_div');
const form = document.querySelector('#add-ticket-form');

//get data
db.collection("tickets").orderBy('date') .onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            mainList.innerHTML += "<tr><td>"+change.doc.id+"</td><td>"+change.doc.data().date+"</td><td>"+change.doc.data().TFname+" "+change.doc.data().TLname+"</td><td>"+change.doc.data().Title+"</td><td>"+change.doc.data().department+"</td><td><button id='myBtn' onclick='viewItem()' class='btn-info'>View Details</button></td</tr>"
        } else if (change.type === "removed") {
            mainList.innerHTML -= "<tr><td>"+change.doc.id+"</td><td>"+change.doc.data().date+"</td><td>"+change.doc.data().TFname+" "+change.doc.data().TLname+"</td><td>"+change.doc.data().Title+"</td><td>"+change.doc.data().department+"</td><td><button onclick='viewItem()' class='btn-info'>View Details</button></td</tr>"
        }
    });
});


    //View Details function
function viewItem(){

    var opened = window.open("","_self");
    opened.document.write('<html><head><title>MyTitle</title></head><body>test</body></html>');

    var docRef = db.collection("tickets").doc(doc.id);

    docRef.get().then(function(doc) {
     if (doc.exists) {
         console.log("ticket data:", doc.data());
     } else {
         // doc.data() will be undefined in this case
         console.log("No such ticket!");
     }
    });
}

document.getElementById("#myBtn").addEventListener('click', (e) => {
         e.stopPropagation();
         let id = e.target.parentElement.getAttribute(doc.id);
        const ref = db.collection('tickets').doc(id).get();
        console.log(ref);
     });
 
    
