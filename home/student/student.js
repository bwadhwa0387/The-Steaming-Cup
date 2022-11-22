function validate()
{
        var uname = document.getElementById("uname");
        var pass = document.getElementById("pass");

        
         if(uname.value.trim()=="")
        {
                document.getElementById("error").style.visibility="visible";
                uname.style.border="solid 2px red";
                return false; 
        }
        else if(pass.value.trim()=="" || pass.value.trim().length<5)
        {
                document.getElementById("error1").style.visibility="visible";
                pass.style.border="solid 2px red";
                return false;
        }
        

        
        

        
        
        
        
}