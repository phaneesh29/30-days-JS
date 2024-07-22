// task - 1
let myBtn = document.querySelector("#myBtn")
let p = document.querySelector("p")

myBtn.addEventListener("click",()=>{
    p.innerHTML = "My Name is JavaScript not SREEPHANEESH"
})

// task-2
const img = document.querySelector("img")
img.addEventListener("dblclick",()=>{
    img.classList.toggle("hide")
})


//task-3
const div = document.querySelector("div")
let ogDivColor = div.style.background
div.addEventListener("mouseover",function(){
    this.style.background = "pink"
})

//task-4
div.addEventListener("mouseout",function(){
    this.style.background = ogDivColor
})

// task-5
const input = document.querySelector("input[type=text]")
input.addEventListener("keydown",(e)=>{
    console.log(e.key)
})

// task-6
input.addEventListener("keyup",(e)=>{
    let mypara = document.querySelector("#mypara")
    mypara.innerHTML = e.target.value
})

// task -7
const formSubmit = document.querySelector("form")
formSubmit.addEventListener("submit",(e)=>{
e.preventDefault()
Array.from(formSubmit.getElementsByTagName("input")).forEach((element)=>{
    console.log(element.value);
})
})

//task-8
let mySecPara = document.querySelector("#mysecpara")
let mySelect = document.querySelector("select[name=myselect]")
mySelect.addEventListener("change",()=>{
    mySecPara.innerHTML = mySelect.value
})

// task - 9
let myUl = document.querySelector("ul")

myUl.addEventListener("click",(e)=>{
    console.log(e.target.innerHTML);
    
})

// task-10
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.child')) {
        alert('Child button clicked: ' + event.target.textContent);
    }
});

document.getElementById('add').addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.className = 'child';
    newButton.textContent = 'New Button';
    document.getElementById('parent').appendChild(newButton);
});