const display=document.getElementById('display')
function clearDisplay(){
    display.value=''
}
function appendToDisplay(value){
    display.value+=value
}
function del(){
    display.value=display.value.slice(0,-1)
}
function cr(){
    try{
        display.value=eval(display.value)
    }
    catch(error)
    {
        display.value='Error'
    }
}