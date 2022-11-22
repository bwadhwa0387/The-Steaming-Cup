
    var user= document.querySelector('#user');
    user.addEventListener('keyup',function(){
        if(user.value.length==0 || user.value.length<6)
    {
        user.style.borderBottom = '1px solid red';
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("tick").style.visibility = "hidden";
    }
        else
        {
            user.style.borderBottom = '1px solid green'; 
            document.getElementById("tick").style.visibility = "visible";  
            document.getElementById("error").style.visibility = "hidden";
        }
    })
    var pass= document.querySelector('#pass');
    user.addEventListener('keyup',function(){
        if(pass.value.length==0 || pass.value.length<6)
    {
        pass.style.borderBottom = '1px solid red';
        
    }
        else
        {
            pass.style.borderBottom = '1px solid green'; 
           
        }
    })
    
