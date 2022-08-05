window.onload = function(){
    var box = document.getElementsByClassName("box");
    var infoshow = "";
    setInterval(function(){
        $.get("http://127.0.0.1:8080/info",function(data){
            // console.log(box);
            infoshow = "";
            for(let i=0;i<data.length;i++){
                infoshow+=data[i].name+" : "+data[i].info+"\n</br>";
            }
            console.log(infoshow)
            $(".box").html(infoshow);
        })
    },200)
}