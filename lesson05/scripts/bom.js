const input= document.querySelector("#favchap");
const button= document.getElementById("button");
const list=document.querySelector("#list");

button.addEventListener("click", ()=>{
    if(input.value !=""){
        const li = document.createElement("li");
        const deletebutton =document.createElement("button");
        li.textContent = input.value;
        deletebutton.textContent = "❌"
        li.append(deletebutton);
        list.append(li);
        input.focus();
        input.focus;
        input.value ="";
        deletebutton.addEventListener("click", ()=>{
            list.removeChild(li);
            input.focus();
            input.focus;
            input.value ="";
        });

    }else{
        input.focus();
        input.focus;
        input.value="";
    }

});
