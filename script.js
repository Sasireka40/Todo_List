let todolist=[]
function Add_items()
{
    var todoInput=document.getElementById("todo_input");
    var text=todoInput.value.trim();
    if(text!=="")
    {
        var li=document.createElement("li");
        li.textContent=text;
        var deletebutton =document.createElement("button");
        deletebutton.textContent="Delete";
        deletebutton.className="delete-btn"
        deletebutton.onclick=function()
        {
            li.remove();
        }
        li.appendChild(deletebutton);
        document.getElementById("todo_items").appendChild(li);
        todoInput.value="";
    }
}
