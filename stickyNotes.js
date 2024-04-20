const notes = document.querySelector(".notes");
const btn = document.querySelector(".btn");
const textArea = document.querySelector(".text");
const bgColor = document.querySelector("#bgColor");
const textColor = document.querySelector("#textColor");


function addNote(){
  
    if(textArea.value.trim() === ''){
        alert("please add note ")
    }else{
    let noteContainer = document.createElement("div");
    let pTag = document.createElement("p");
    let closeTag = document.createElement("span");
    let editNote = document.createElement("span");
    let bIcon = document.createElement("span");
    let iIcon = document.createElement("span");
    let uIcon = document.createElement("span");

     noteContainer.classList.add("note")
     pTag.classList.add("para");
     closeTag.classList.add("material-symbols-outlined","close");
     editNote.classList.add("material-symbols-outlined","edit-note");
     bIcon.classList.add("material-symbols-outlined","bold-icon");
     iIcon.classList.add("material-symbols-outlined","italic-icon");
     uIcon.classList.add("material-symbols-outlined","underline-icon");

     noteContainer.style.backgroundColor=bgColor.value;
     pTag.innerText = textArea.value;
     closeTag.innerText = "close";
     editNote.innerText ="edit_note";
     bIcon.innerText = "format_bold";
     iIcon.innerText = "format_italic"
     uIcon.innerText= "format_underlined"

     editNote.addEventListener("click",editedNotes)

     pTag.addEventListener("blur",makeEditableFalse);
 
     bIcon.addEventListener("click",boldText);
 
     iIcon.addEventListener("click",italicText)
 
     uIcon.addEventListener("click",underlineText)
     

     noteContainer.append(pTag);
     noteContainer.append(closeTag);
     noteContainer.append(editNote);
     noteContainer.append(bIcon);
     noteContainer.append(iIcon);
     noteContainer.append(uIcon);

     for(let i=0;i<noteContainer.childNodes.length;i++){
        noteContainer.childNodes[i].style.color=textColor.value;
     }
     
     notes.append(noteContainer);

     textArea.value = "";
     bgColor.value ="#FFFFFF";
     textColor.value= "000000";

    closeTag.addEventListener("click",(event)=>{
          const ask = confirm("Confirm to delete !!!");
          if(ask){
            event.target.parentNode.remove();
          }
    })

}
   
}
btn.addEventListener("click",addNote);



document.addEventListener("keyup",(event)=>{
    if(event.key === 'Enter'){
        addNote();
    }
})


function editedNotes(event){
    event.target.parentNode.children[0].contentEditable=true;
    event.target.parentNode.children[0].focus();
    return event.target.parentNode.children[0].innerText.length;
}

let bFlag = false;
function boldText(event){
    if(bFlag === false){
        event.target.parentNode.children[0].style.fontWeight = "500"
        bFlag=true;
    }else{
        event.target.parentNode.children[0].style.fontWeight = "normal";
        bFlag=false;
    }
}

let iFlag = false;
function italicText(event){
    if(iFlag === false){
        event.target.parentNode.children[0].style.fontStyle = "italic"
        iFlag=true;
    }else{
        event.target.parentNode.children[0].style.fontStyle = "normal";
        iFlag=false;
    }
}

let uFlag = false;
function underlineText(event){
    if(uFlag === false){
        event.target.parentNode.children[0].style.textDecoration = "underline"
        uFlag=true;
    }else{
        event.target.parentNode.children[0].style.textDecoration = "none";
        uFlag=false;
    }
}

function makeEditableFalse(event){
    event.target.contentEditable = false;

    let editedFlag = false;
    if(editedFlag === false){
        let message = document.createElement("span");
        message.classList.add("msg-edit");
        message.style.color = event.target.style.color;
        message.innerText = "edited"
        event.target.parentNode.append(message);
        editedFlag=true;
    }
    
}