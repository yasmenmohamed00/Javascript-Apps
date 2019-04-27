//Define UI Vars
let list = document.querySelector('.list');
let addItem = document.querySelector('#add');
let noteDate = document.querySelector('.date');
let body = document.querySelector('body');

loadEventListener();
// Load all Event Listeners
function loadEventListener() {

    // Add a new note by clicking the plus sign above.
    addItem.addEventListener('click', addNote);

    // Delete this note.
    list.addEventListener('click', deleteNote); 

    body.addEventListener('keydown', writeNote);

}

function addNote(e){  
getDate();
//create new note
let newNote = document.createElement('li');
newNote.className = 'note';

 let noteHeader = document.createElement('div');
 noteHeader.className = 'note__header';

 let noteBody = document.createElement('div');
 noteBody.className = 'note__body';
 noteBody.value=' ';
 noteBody.appendChild(document.createTextNode(noteBody.value));
//  console.log( noteBody)
//  Click/Focus to edit.
 noteBody.setAttribute('contenteditable', 'true');
 
 let p = document.createElement('p');
 p.className = 'date';
 p.appendChild(document.createTextNode(today));

 let noteItem = document.createElement('div');
 noteItem.className = 'note__header-item';
 
 newNote.appendChild(noteHeader);
 newNote.appendChild(noteBody);
 noteHeader.appendChild(p);
 noteHeader.appendChild(noteItem);
 noteItem.innerHTML =  '<i id="note__header-item-check" class="fas fa-check"></i>' +
                       '<i id="note__header-item-delete" class="far fa-trash-alt"></i>';
list.insertBefore(newNote, list.childNodes[0]);

e.preventDefault();
}  

//write into note
function writeNote(e){
    let itemCheck = document.getElementById('note__header-item-check');
    var timer = null;
    if(e.type){
        itemCheck.className = 'fas fa-pen';
        // console.log('hjfghjkk')
    }
    clearTimeout(timer); 
    timer = setTimeout(stopTyping, 3000);
}
//stop typing in the note and save it
function stopTyping(){
    let itemCheck = document.getElementById('note__header-item-check');
    itemCheck.className = 'fas fa-check';
}

// Delete this note.
 function deleteNote(e){
   if(e.target.classList.contains('fa-trash-alt')){   
     if(confirm('Are you sure.')){
         e.target.parentElement.parentElement.parentElement.remove();
     }
   }
}

// the date when he created the note
var today;
let getDate = function(){
    var monthNames = [ "January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December" ];
    var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];    

    today = new Date();
    ddd = today.getDay();
    day = today.getDate()
    mmm = today.getMonth();
    hour = today.getHours();
    min = today.getMinutes();
    ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    min = min < 10 ? '0'+min : min;
    yyy = today.getFullYear();

    today = dayNames[ddd]+' '+day+' '+monthNames[mmm] +','+' '+yyy +' '+ 'at'+' '+ hour+':'+min+ampm;
    }    
   













    