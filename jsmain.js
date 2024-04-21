// function a(){ document.getElementById("Home").style.color="green";}
// function blue(){color="green";}
// document.getElementById("pa").style.animationDuration = "move 5s 1";
// var Home=document.getElementById("Home");


// var Contact=document.getElementById("Contact");
var count=1;
function leftarrow(){
        if(count>1){hel(--count);}
        else{leftarrow(count=5);}
}
function arrow(){
        if(count<4){hel(++count);}
        else{leftarrow(count=2);}
        
        
}

function hel(a)
{
    if(a==1){
            document.getElementById("pa").style.margin = "18px 0px 0px 0px";
            document.getElementById("pa").style.width = "47.2px";

            document.getElementById("flex1").style.margin = "0px 0px 5px 0px";
            count=a;
            
            
            
    }else if(a==2){
            document.getElementById("pa").style.margin = "18px 0px 0px 116px";
            document.getElementById("pa").style.width = "88px";

            document.getElementById("flex1").style.margin = "-675px 0px 50px 0px";
            count=a;

            
            // document.getElementById("flex1").style.margin = "0px 0px 0px 0px";
    }else if(a==3){
            document.getElementById("pa").style.margin = "18px 0px 0px 274px";
            document.getElementById("pa").style.width = "80.5px";

            document.getElementById("flex1").style.margin = "-1350px 0px 0px 0px";
            document.getElementById("flex3").style.margin = "100px 0px 0px 0px";
            count=a;
            
    }
    else if(a==4){
            document.getElementById("pa").style.margin = "18px 0px 0px 424px";
            document.getElementById("pa").style.width = "75.5px";

            document.getElementById("flex1").style.margin = "-2025px 0px 0px 0px";
            document.getElementById("flex4").style.margin = "50px 0px 100px 0px";
            count=a;
            
    }
}
// document.getElementById("flex1").style.margin = "-675px 0px 50px 0px";