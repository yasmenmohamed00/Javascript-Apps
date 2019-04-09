//Define UI Vars
let sections = document.querySelector('section');
let addItem = document.querySelector('#add');
let noteDate = document.querySelector('.date');
let newNote = document.querySelector('.note');


loadEventListener();
// Load all Event Listeners
function loadEventListener() {
    // Add a new note by clicking the plus sign above.
    addItem.addEventListener('click', addNote);

    // Delete this note.
    sections.addEventListener('click', deleteNote);
}

function addNote(e){
//create new note
let newNote = document.createElement('div');
newNote.className = 'note';

 let noteHeader = document.createElement('div');
 noteHeader.className = 'note__header';

 let noteBody = document.createElement('div');
 noteBody.className = 'note__body';
//  Click/Focus to edit.
 noteBody.setAttribute('contenteditable', 'true');

 let p = document.createElement('p');
 p.className = 'data';
 p.appendChild(document.createTextNode(today));

 let noteItem = document.createElement('div');
 noteItem.className = 'note__header-item';
 
 newNote.appendChild(noteHeader);
 newNote.appendChild(noteBody);
 noteHeader.appendChild(p);
 noteHeader.appendChild(noteItem);
 noteItem.innerHTML =  '<i id="note__header-item-check" class="fas fa-pen"></i>' +
 ' <i id="note__header-item-delete" class="far fa-trash-alt"></i>';
sections.appendChild(newNote);

e.preventDefault();
}
// the date when he created the note
var monthNames = [ "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December" ];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];    
      
var today = new Date();
var ddd = today.getDay();
var mmm = today.getMonth();
var hour = today.getHours();
var min = today.getMinutes();
var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    min = min < 10 ? '0'+min : min;
var yyy = today.getFullYear();
    today = dayNames[ddd]+' '+0+ddd+' '+monthNames[mmm] +','+' '+yyy +' '+ 'at'+' '+ hour+':'+min+ampm;
  
// Delete this note.
 function deleteNote(e){
   if(e.target.classList.contains('fa-trash-alt')){   
     if(confirm('Are you sure.')){
         e.target.parentElement.parentElement.parentElement.remove();
     }
   }
}

