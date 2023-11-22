let btn=document.getElementById("btn")
let tbody=document.getElementById("tbody")

let add = (todo)=>{
  let tr=document.createElement('tr')
  let td1=document.createElement('td')
  let td2=document.createElement('td')
  let td3=document.createElement('td')
  let td4=document.createElement('td')

  tbody.appendChild(tr)
  tr.appendChild(td1)
  tr.appendChild(td2)
  tr.appendChild(td3)
  tr.appendChild(td4)

  td1.innerText=todo.userId
  td2.innerText=todo.id
  td3.innerText=todo.title
  td4.innerText=todo.completed
}

btn.addEventListener('click',()=>{
  //ajax
  let call = new XMLHttpRequest()
  call.open("GET","https://jsonplaceholder.typicode.com/todos",false)
  call.send();

  let reponse = call.response
  let todos=JSON.parse(reponse)

  for(let i=0;i<todos.length;i++)
    add(todos[i])
})