function matching(){
    var First = document.getElementById('first').value;
    var Second = document.getElementById('second').value
    var final =  document.getElementById('result'); 
    var firstArr = First.toLowerCase();
    var secondArr = Second.toLowerCase();
    if((First == "") || (Second == "")){
        return final.innerHTML = "Please enter two strings";
    }else{
    for(var i=0;i<Second.length;i++){
        if(firstArr.indexOf(secondArr[i])<0){
          return final.innerHTML = "Do not Match";
        }
    }
        return final.innerHTML=  "Matches";
}
}