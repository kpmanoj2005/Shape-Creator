var numberInShape = 1;
var oldValue = 0;

let button = document.getElementById("button");

button.onclick = function() {
    let n =document.getElementById("number").value;
    let circle = document.getElementById("circle");
    let square = document.getElementById("square");
    let rectangle = document.getElementById("rectangle");

    let box=document.getElementById("box");

    let j;
    n=Number(oldValue) + Number(n); 
    for(j=numberInShape;j<=n;j++){
        
        var shape=document.createElement("div");
        shape.innerHTML+=numberInShape;
        if(square.checked){
            shape.classList.add("square");
        }
        else if(circle.checked){
            shape.classList.add("circle");
        }
        else if(rectangle.checked){
            shape.classList.add("rectangle");
        }
        else{
            document.write("error");
        }
        box.appendChild(shape);
        numberInShape++;
        oldValue=document.getElementById("box").lastChild.innerHTML;
    }
}