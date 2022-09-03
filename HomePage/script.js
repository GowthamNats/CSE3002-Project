function addItem() { 
    let x = document.forms["form1"]["list-item"].value; 
    if (x=="") { 
      alert("Can't create an empty item."); 
      return false;   
    } 
    console.log(x); 
    
    displayItem(x);
  } 
  
  function displayItem(x) {
    document.getElementById("list-items1").innerHTML+=`<div class="list-items">        <div>            <h1>`+x+`</h1>        </div>        <div>            <button>Edit</button>            <button>Delete</button>        </div>    </div>`; 
  }