function butttonClick(val){
  
    document.getElementById("screen").value+=val

}
function butttonClear(){
    document.getElementById("screen").value=""
}
function buttonEqual(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    console.log(result)
    document.getElementById("screen").value=result
    
}