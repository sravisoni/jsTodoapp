console.log("Welcome To Notes App");
showNotes();
//If User Adds a Note, add it to the localStorage.
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e)
    {
        let addTxt=document.getElementById("addTxt");
        let notes=localStorage.getItem("notes");
        if(notes==null)
            {
             noteObj=[];
            }
        else
            {
                noteObj=JSON.parse(notes);
            }
    noteObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(noteObj));
    addTxt.value="";
    console.log(noteObj);
    showNotes();
    });

    //function to show elements from localStorage.
    function showNotes()
    {
        let notes=localStorage.getItem("notes");
        if(notes==null)
            {
                notesObj=[];
            }
        else
            {
                notesObj=JSON.parse(notes);
            }
    let html="";
    notesObj.forEach(function(element, index)
    {
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note${index +1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        `
    });
    let noteElm=document.getElementById("notes");
    if(notesObj.length!=0)     
        {
            noteElm.innerHTML=html;
        }   
    else
        {
            noteElm.innerHTML=`Nothing To show ! Use "Add a note" section above to add notes`;
        }    
    }

    //Function To Delete Note.
    function deleteNote(index)
    {
        console.log("I am deleting",index);
        let notes=localStorage.getItem("notes");
        if(notes==null)
            {
                notesObj=[];
            }
        else
            {
                notesObj=JSON.parse(notes);
            }
       notesObj.splice(index,1);
       localStorage.setItem("notes",JSON.stringify(notesObj));
       showNotes();     
    }

    //Search Function.....
        let search=document.getElementById('searchTxt');
        search.addEventListener("input",function()
        {
            let inputVal=search.value.toLowerCase();
            //console.log("input event fired!",inputVal)
            
            let noteCards=document.getElementsByClassName('noteCard');
            Array.from(noteCards).forEach(function(element)
            {
                let cardTxt=element.getElementsByTagName("p")[0].innerText;
                if(cardTxt.includes(inputVal))
                {
                    element.style.display="block";
                }
                else
                {
                    element.style.display="none";
                }
               //console.log(Cardtxt); 
            })
        })
    
