const form = document.querySelector("#form"); //gives form
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formInput = document.querySelector("input[type='text']");
    if(formInput.value){
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText=formInput.value;
    p.classname = "coursetitle";
    const ubutton = document.createElement("button");
    ubutton.innerText="update";
    ubutton.className="update";
    const dbutton = document.createElement("button");
    dbutton.innerText="delete";
    dbutton.className="delete";
    li.append(p, ubutton, dbutton);
    const lists = document.querySelector("#tasklist ul");
   lists.appendChild(li);
   formInput.value=""; //makes box empty after adding value
    }
});

//update part
const lists = document.querySelectorAll("#tasklist ul");
lists.forEach(element => {
    element.addEventListener("click", (event) => {
        if(event.target.className === "update"){
            const li = event.target.parentElement;
            const p = li.querySelector("p");
            const input = document.createElement("input");
            input.type="text";
            input.value=p.innerText;
            li.insertBefore(input, p);
            li.removeChild(p);
            event.target.innerText="save";
            event.target.className="save";
        }
        else if(event.target.className === "save"){
            const li = event.target.parentElement;
            const input = li.querySelector("input[type='text']");
            const p = document.createElement("p");
            p.innerText=input.value;
            p.className="coursetitle";
            li.insertBefore(p, input);
            li.removeChild(input);
            event.target.innerText="update";
            event.target.className="update";
        }
    })
})


//delete part
lists.forEach(element => {
    element.addEventListener("click", (event) => {
        if(event.target.className === "delete"){
            const li = event.target.parentElement;
            element.removeChild(li);
        }
         
    })
})