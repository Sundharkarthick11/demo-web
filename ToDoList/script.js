
function update(event){
    //selecting input
    var user_inpt=document.getElementById("input-text")
    //selecting div
    var divu=document.querySelector(".res")
    var item=document.createElement("p")
    item.setAttribute("class","para")
    item.textContent=user_inpt.value
    divu.append(item)
    user_inpt.value=''
    
}

