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