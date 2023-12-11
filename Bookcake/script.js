//selecting the popup button, popup overlay, popup window

var popupbutton=document.getElementById("add-popup-button")
var _overlay=document.querySelector(".popup-overlay")
var _window=document.querySelector(".popup-window")

popupbutton.addEventListener("click", function(){
    _overlay.style.display="block";
    _window.style.display="block";
})
//selecting cancel button
var _cancelbutton=document.querySelector(".cancel-popup")

_cancelbutton.addEventListener("click", function(){
    _overlay.style.display="none";
    _window.style.display="none";
})
//selecting container, book-name-input, book-author-input,book-description, add button
var _container=document.querySelector(".container")
var bookname=document.querySelector(".book-name-input")
var bookauthor=document.querySelector(".book-author-input")
var bookdescrip=document.querySelector(".book-description")
var _addbutton=document.querySelector(".add-book")

_addbutton.addEventListener("click", function(event){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h2 style="color: yellowgreen;">${bookauthor.value}</h2>
    <p>${bookdescrip.value}</p>
    <button onclick="deletefunc(event)">Delete</button>`
    _container.append(div)
    bookname.value=""
    bookauthor.value=""
    bookdescrip.value=""
    _overlay.style.display="none";
    _window.style.display="none";
})

function deletefunc(event){
    event.target.parentElement.remove()
}

