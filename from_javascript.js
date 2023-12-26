var width=screen.width;
let ep,ep1,pf,ef;
let len_e="";
let i=0;
let m;
let cl_msg=0;
let cx;
let ct;
var sbt=document.getElementById("submit");

document.getElementById("cl").style.color = "red";
cl_message="Login Your Account";
cx=cl_message.length;
document.getElementById("cl").value=cl_message;
cl_show();


if(width > 770)
{
    sbt.style.left="22vw";
    document.getElementById("b").style.left="45vw";
    document.getElementById("img1").style.display="visible";
    document.getElementById("img2").style.display="none";
}
else if(width <= 770)
{
    document.getElementById("submit").style.left= "-7vw";
    document.getElementById("back").style.left= "12vw";
    document.getElementById("next").style.left= "33.5vw";
    document.getElementById("b").style.left="120vw";
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="visible";
}

document.getElementById("back").style.visibility="hidden";
document.getElementById("next").style.visibility="hidden";
document.getElementById("input1").style.visibility="hidden";
document.getElementById("old").style.visibility="hidden";
document.getElementById("new").style.visibility="visible";
document.getElementById("input2").placeholder="example123@gmail.com";
document.getElementById("input2").type="email";
document.getElementById("input3").placeholder="Password";
document.getElementById("input3").type="Password";
document.getElementById("submit").style.visibility="visible";

if(document.getElementById("input2").placeholder == "example123@gmail.com" && document.getElementById("input3").placeholder == "Password")
{
    document.getElementById("input3").addEventListener("input",passfunc);
}

document.addEventListener("click",openpasswordcheck);
function openpasswordcheck(event)
{
    if(event.target.id == "input3" || event.target.id == "input2")
    {
        if(document.getElementById("input2").placeholder == "Password" && document.getElementById("input3").placeholder == "Re-Enter Password")
        {
            document.getElementById("b").style.left="74vw";
            if(width <= 770)
            {
                document.getElementById("b").style.left="35vw";
            }
        }
        else if(document.getElementById("input3").placeholder == "Password")
        {
            //document.getElementById("input3").addEventListener("keyup",passfunc);
            if(event.target.id == "input3")
            {
                document.getElementById("b").style.left="74vw";
                if(width <= 770)
                {
                    document.getElementById("b").style.left="35vw";
                }
            }
            else if(event.target.id == "input2")
            {
                document.getElementById("b").style.left="35vw";
                if(width <= 770)
                {
                    document.getElementById("b").style.left="100vw";
                }
            }
        }
        else
        {
            document.getElementById("b").style.left="35vw";
            if(width <= 770)
            {
                document.getElementById("b").style.left="100vw";
            }
        }
    }
    else if(event.target.id == "fpassword" || event.target.id == "login" || event.target.id == "create")
    {
        document.getElementById("b").style.left="35vw";
        if(width <= 770)
        {
            document.getElementById("b").style.left="100vw";
        }
        document.getElementById("input1").value="";
        document.getElementById("input2").value="";
        document.getElementById("input3").value="";
        document.getElementById("check").value="";
        document.getElementById("up1").style.color="blue";
        document.getElementById("lw1").style.color="blue";
        document.getElementById("ln1").style.color="blue";
        document.getElementById("sp1").style.color="blue";
        document.getElementById("ch1").style.color="blue";
        document.getElementById("up").checked=false;
        document.getElementById("lw").checked=false;
        document.getElementById("ln").checked=false;
        document.getElementById("sp").checked=false;
        document.getElementById("ch").checked=false;
    }
    else if(event.target.tagName == "BUTTON" || event.target.id == "input1" || event.target.tagName == "DIV")
    {
        document.getElementById("b").style.left="35vw";
        if(width <= 770)
        {
            document.getElementById("b").style.left="100vw";
        }
    }
    else if(event.target.tagName == "" || event.target.id == "")
    {
        document.getElementById("b").style.left="35vw";
        if(width <= 770)
        {
            document.getElementById("b").style.left="100vw";
        }
    }
}


document.addEventListener("click",checkfunction);
function checkfunction(event)
{
    if(event.target.id == "next" || event.target.id == "submit")
    {
        if(document.getElementById("input2").placeholder == "example123@gmail.com" &&
        document.getElementById("input3").placeholder == "Password")
        {
            ep=emailfunc();
            if(ep == true)
            {
                document.getElementById("input3").removeEventListener("input",passfunc);
                document.getElementById("input1").value="";
                document.getElementById("input2").value="";
                document.getElementById("input3").value="";

                document.getElementById("check").value="";
                document.getElementById("up1").style.color="blue";
                document.getElementById("lw1").style.color="blue";
                document.getElementById("ln1").style.color="blue";
                document.getElementById("sp1").style.color="blue";
                document.getElementById("ch1").style.color="blue";
                document.getElementById("up").checked=false;
                document.getElementById("lw").checked=false;
                document.getElementById("ln").checked=false;
                document.getElementById("sp").checked=false;
                document.getElementById("ch").checked=false;
            }
            //emailfunc();
        }

        else if(document.getElementById("input1").placeholder == "example123@gmail.com" && document.getElementById("input2").placeholder == "Password" && document.getElementById("input3").placeholder == "Re-Enter Password")
        {
            ep1=emailfunc1();
            if(ep1 == true)
            {
                document.getElementById("input3").removeEventListener("input",passfunc);
                document.getElementById("input2").removeEventListener("input",passfunc2);
                document.getElementById("input2").removeEventListener("keyup",clr);
                document.getElementById("input3").removeEventListener("keyup",clr);

                document.getElementById("input1").placeholder="First-Name";
                document.getElementById("input2").placeholder="Last-Name";
                document.getElementById("input3").placeholder="OTP";
                fname=document.getElementById("input1");
                lname=document.getElementById("input2");
                otp=document.getElementById("input3");
                document.getElementById("input3").type="text";
                document.getElementById("input2").type="text";
                document.getElementById("next").style.visibility="hidden";
                document.getElementById("submit").style.visibility="visible";
                document.getElementById("back").style.visibility="visible";

                document.getElementById("input1").value="";
                document.getElementById("input2").value="";
                document.getElementById("input3").value="";

                document.getElementById("check").value="";
                document.getElementById("up1").style.color="blue";
                document.getElementById("lw1").style.color="blue";
                document.getElementById("ln1").style.color="blue";
                document.getElementById("sp1").style.color="blue";
                document.getElementById("ch1").style.color="blue";
                document.getElementById("up").checked=false;
                document.getElementById("lw").checked=false;
                document.getElementById("ln").checked=false;
                document.getElementById("sp").checked=false;
                document.getElementById("ch").checked=false;
            }
            else if(ep1 == false)
            {
                document.getElementById("input2").addEventListener("keyup",clr);
                document.getElementById("input3").addEventListener("keyup",clr);
            }
        }

        else if(document.getElementById("input2").placeholder == "Password" && document.getElementById("input3").placeholder == "Re-Enter Password")
        {
            pf=pass_chk_func();
            if(pf == true)
            {
                document.getElementById("input3").removeEventListener("input",passfunc);
                document.getElementById("input2").removeEventListener("input",passfunc2);
                document.getElementById("input2").removeEventListener("keyup",clr);
                document.getElementById("input3").removeEventListener("keyup",clr);

                document.getElementById("input1").value="";
                document.getElementById("input2").value="";
                document.getElementById("input3").value="";
            }
            else if(pf == false)
            {
                document.getElementById("input2").addEventListener("keyup",clr);
                document.getElementById("input3").addEventListener("keyup",clr);
            }
        }

        else if(document.getElementById("input2").placeholder == "example123@gmail.com" && document.getElementById("input3").placeholder == "OTP")
        {
            ef=email_chk_func();
                    
            if(ef == true)
            {
                document.getElementById("input2").placeholder="Password";
                document.getElementById("input3").placeholder="Re-Enter Password";
                password=document.getElementById("input2").value;
                repassword=document.getElementById("input3").value;
                document.getElementById("input3").type="Password";
                document.getElementById("input2").type="Password";
                document.getElementById("next").style.visibility="hidden";
                document.getElementById("submit").style.visibility="visible";

                document.getElementById("input1").value="";
                document.getElementById("input2").value="";
                document.getElementById("input3").value="";

                document.getElementById("input3").addEventListener("input",passfunc);
                document.getElementById("input2").addEventListener("input",passfunc2);
                document.getElementById("input2").addEventListener("click",clr);
                document.getElementById("input3").addEventListener("click",clr);
            }
            else if(ef == false)
            {
            }
            else if(event.target.id == "back")
            {
                document.getElementById("check").value="";
                document.getElementById("up1").style.color="blue";
                document.getElementById("lw1").style.color="blue";
                document.getElementById("ln1").style.color="blue";
                document.getElementById("sp1").style.color="blue";
                document.getElementById("ch1").style.color="blue";
                document.getElementById("up").checked=false;
                document.getElementById("lw").checked=false;
                document.getElementById("ln").checked=false;
                document.getElementById("sp").checked=false;
                document.getElementById("ch").checked=false;
            }
        }
    }
}


//the function of forgot anchor tag
document.getElementById("fpassword").addEventListener("click",forgot)
function forgot()
{
    document.getElementById("cl").style.color = "brown";
    ct=document.getElementById("cl").innerHTML.length;
    cl_show().then((ep) => {
        if (ep === true) 
        {
            document.getElementById("cl").innerHTM="";
            cl_delete();
            timeout=3000;
            setTimeout(() => 
            {
                cl_message="";
                if(ct >= 0)
                {
                    document.getElementById("cl").innerHTML = "";
                }
                cl_message="Forget Password";
                cx=cl_message.length;
                document.getElementById("cl").value=cl_message;
                cl_show();
            }, timeout);
        } 
    });
    document.getElementById("back").style.visibility="visible";
    document.getElementById("submit").style.visibility="hidden";
    document.getElementById("next").style.visibility="visible";
    document.getElementById("input2").placeholder="example123@gmail.com";
    document.getElementById("input3").placeholder="OTP";
    email=document.getElementById("input2");
    otp=document.getElementById("input3");
    document.getElementById("input3").type="text";
    document.getElementById("input2").type="email";
    if(width > 700)
    {
        document.getElementById("next").style.left="39.5vw";
    }
    
    //while clicking the forgot button the back button work
    document.getElementById("back").addEventListener("click",back)
    function back()
    {
        document.getElementById("next").style.left="39.5vw";
        document.getElementById("input2").placeholder="example123@gmail.com";
        document.getElementById("input3").placeholder="Password";
        document.getElementById("input3").type="Password";
        email=document.getElementById("input2");
        password=document.getElementById("input3");
        document.getElementById("input2").type="email";
        document.getElementById("back").style.visibility="hidden";
        document.getElementById("submit").style.visibility="visible";
        document.getElementById("next").style.visibility="hidden";
        if(width <= 770)
        {
            document.getElementById("submit").style.left= "-7vw";
        }
    }

    //while clicking the forgot button the next button work
    document.getElementById("next").addEventListener("click",next)
    function next()
    {
        if(width > 770)
        {
            sbt.style.left="31.2vw";
        }
        else if(width <= 770)
        {
            document.getElementById("submit").style.left= "11vw";
        }

        document.getElementById("check").value="";
        document.getElementById("up1").style.color="blue";
        document.getElementById("lw1").style.color="blue";
        document.getElementById("ln1").style.color="blue";
        document.getElementById("sp1").style.color="blue";
        document.getElementById("ch1").style.color="blue";
        document.getElementById("up").checked=false;
        document.getElementById("lw").checked=false;
        document.getElementById("ln").checked=false;
        document.getElementById("sp").checked=false;
        document.getElementById("ch").checked=false;

        //while clicking the forgot button the back button work
        document.getElementById("back").addEventListener("click",back);
        function back()
        {
            document.getElementById("next").style.left= "39.5vw";
            document.getElementById("input2").placeholder="example123@gmail.com";
            document.getElementById("input3").placeholder="OTP";
            email=document.getElementById("input2");
            otp=document.getElementById("input3");
            document.getElementById("input3").type="text";
            document.getElementById("input2").type="email";
            document.getElementById("next").style.visibility="visible";
            document.getElementById("back").style.visibility="visible";
            document.getElementById("submit").style.visibility="hidden";
            document.getElementById("input3").removeEventListener("input",passfunc);
            document.getElementById("input2").removeEventListener("input",passfunc2);
            document.getElementById("input2").removeEventListener("click",clr);
            document.getElementById("input3").removeEventListener("click",clr);

            document.getElementById("check").value="";
            document.getElementById("up1").style.color="blue";
            document.getElementById("lw1").style.color="blue";
            document.getElementById("ln1").style.color="blue";
            document.getElementById("sp1").style.color="blue";
            document.getElementById("ch1").style.color="blue";
            document.getElementById("up").checked=false;
            document.getElementById("lw").checked=false;
            document.getElementById("ln").checked=false;
            document.getElementById("sp").checked=false;
            document.getElementById("ch").checked=false;
        }
    }
    document.getElementById("submit").addEventListener("click",()=>
    {
        if(pf == true)
        {

        }
        else if(pf == false)
        {

        }
    })
}


//create the create button function
document.getElementById("create").addEventListener("click",create)
function create()
{
    document.getElementById("cl").style.color = "rgb(133, 24, 133)";
    ct=document.getElementById("cl").innerHTML.length;
    cl_show().then((ep) => {
        if (ep === true) 
        {
            cl_delete();
            timeout=3000;
            setTimeout(() => 
            {
                if(ct >= 0)
                {
                    document.getElementById("cl").innerHTML = "";
                }
                cl_message="Create Your Account";
                cx=cl_message.length;
                document.getElementById("cl").value=cl_message;
                ret=cl_show();
                ret=false;
            }, timeout);
        } 
    });
    
    if(width > 770)
    {
        document.getElementById("next").style.left="30.2vw";
        document.getElementById("from_1").style.top="11vh";
    }
    else if(width <= 770)
    {
        document.getElementById("from_1").style.top= "38vh";
        document.getElementById("submit").style.left= "-7vw";
        document.getElementById("back").style.left= "12vw";
        document.getElementById("next").style.left= "11vw";
    }

    document.getElementById("input3").addEventListener("input",passfunc);
    document.getElementById("input2").addEventListener("input",passfunc2);
    document.getElementById("input2").addEventListener("click",clr);
    document.getElementById("input3").addEventListener("click",clr);

    document.getElementById("back").style.visibility="hidden";
    document.getElementById("submit").style.visibility="hidden";
    document.getElementById("next").style.visibility="visible";
    document.getElementById("new").style.visibility="hidden";
    document.getElementById("old").style.visibility="visible";
    document.getElementById("fpassword").style.visibility="hidden";
    document.getElementById("input1").style.visibility="visible";
    document.getElementById("input1").placeholder="example123@gmail.com";
    document.getElementById("input2").placeholder="Password";
    document.getElementById("input3").placeholder="Re-Enter Password";
    let el=document.getElementById("input1");
    let password=document.getElementById("input2");
    let re_password=document.getElementById("input3");

    document.getElementById("input1").type="email";
    document.getElementById("input3").type="Password";
    document.getElementById("input2").type="Password";
    
    document.getElementById("next").addEventListener("click",next1)
    function next1()
    {
        if(width <= 770)
        {
            document.getElementById("submit").style.left= "11vw";
        }
        else if(width > 770)
        {
            sbt.style.left="31.2vw";
        }

        document.getElementById("back").addEventListener("click",()=>
        {
            if(width <= 770)
            {
                
            }
            else if(width > 770)
            {
                document.getElementById("next").style.visibility="visible";
                document.getElementById("next").style.left="30.2vw";
            }
            document.getElementById("back").style.visibility="hidden";
            document.getElementById("submit").style.visibility="hidden";
            document.getElementById("input1").placeholder="example123@gmail.com";
            document.getElementById("input2").placeholder="Password";
            document.getElementById("input3").placeholder="Re-Enter Password";
    
            document.getElementById("input3").addEventListener("input",passfunc);
            document.getElementById("input2").addEventListener("input",passfunc2);
            document.getElementById("input2").addEventListener("click",clr);
            document.getElementById("input3").addEventListener("click",clr);

            document.getElementById("check").value="";
            document.getElementById("up1").style.color="blue";
            document.getElementById("lw1").style.color="blue";
            document.getElementById("ln1").style.color="blue";
            document.getElementById("sp1").style.color="blue";
            document.getElementById("ch1").style.color="blue";
            document.getElementById("up").checked=false;
            document.getElementById("lw").checked=false;
            document.getElementById("ln").checked=false;
            document.getElementById("sp").checked=false;
            document.getElementById("ch").checked=false;
        })
    }
   
    document.getElementById("submit").addEventListener("click",()=>
    {   
        //submit function
    })
}


//create the login button function
document.getElementById("login").addEventListener("click",login)
function login()
{
    ct=document.getElementById("cl").innerHTML.length;
    document.getElementById("cl").style.color = "red";
    cl_show().then((ep) => {
        if (ep === true) 
        {
            document.getElementById("cl").innerHTM="";
            cl_delete();
            timeout=3000;
            setTimeout(() => 
            {
                cl_message="";
                if(ct >= 0)
                {
                    document.getElementById("cl").innerHTML = "";
                }
                cl_message="Login Your Account";
                cx=cl_message.length;
                document.getElementById("cl").value=cl_message;
                ret=cl_show();
            }, timeout);
        } 
    });
    
    document.getElementById("back").style.visibility="hidden";
    sbt.style.left="22vw";
    document.getElementById("submit").style.visibility="visible";
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("input1").style.visibility="hidden";
    if(width > 770)
    {
        document.getElementById("from_1").style.top="5vh";       
    }
    else if(width <= 770)
    {
        document.getElementById("submit").style.left= "-7vw";
        document.getElementById("from_1").style.top= "34vh";
        document.getElementById("back").style.left= "12vw";
        document.getElementById("next").style.left= "33.5vw";
    }
    document.getElementById("old").style.visibility="hidden";
    document.getElementById("new").style.visibility="visible";
    document.getElementById("input2").placeholder="example123@gmail.com";
    document.getElementById("input3").placeholder="Password";
    email=document.getElementById("input2");
    password=document.getElementById("input3");
    document.getElementById("input3").type="Password";
    document.getElementById("input2").type="email";
    document.getElementById("fpassword").style.visibility="visible";
}

//----------------------------------------------[this is for the the div 2]--------------------------------------------------

function passfunc()
{
    // password checking function
    //second copy of password check checkbox (it specally for input1 tag)
    password=document.getElementById("input3").value;
    document.getElementById("check").value=password;
    if(password.match(/[A-Z]/g))
    {
        //console.log("0")
        document.getElementById("up").checked=true;
        document.getElementById("up").style.accentColor="green";
        document.getElementById("up1").style.color="green";
    }
    else
    {
        //console.log("1")
        document.getElementById("up").checked=false;
        document.getElementById("up1").style.color="red";
    }
    if(password.match(/[a-z]/g))
    {
        //console.log("2")
        document.getElementById("lw").checked=true;
        document.getElementById("lw").style.accentColor="green";
        document.getElementById("lw1").style.color="green";
    }
    else
    {
        //console.log("3")
        document.getElementById("lw").checked=false;
        document.getElementById("lw1").style.color="red";
    }
    if(password.match(/[0-9]/g))
    {
        //console.log("4")
        document.getElementById("ln").checked=true;
        document.getElementById("ln").style.accentColor="green";
        document.getElementById("ln1").style.color="green";
    }
    else
    {
        //console.log("5")
        document.getElementById("ln").checked=false;
        document.getElementById("ln1").style.color="red";
    }
    if(password.match(/[!@#$%^&*=+\/'";:-]/g))
    {
        //console.log("6")
        document.getElementById("sp").checked=true;
        document.getElementById("sp").style.accentColor="green";
        document.getElementById("sp1").style.color="green";
    }
    else
    {
        //console.log("7")
        document.getElementById("sp").checked=false;
        document.getElementById("sp1").style.color="red";
    }
    if(password.match(/^.{6,}$/))
    {
        //console.log("8")
        document.getElementById("ch").checked=true;
        document.getElementById("ch").style.accentColor="green";
        document.getElementById("ch1").style.color="green";
     }
    else
    {
        //console.log("9")
        document.getElementById("ch").checked=false;
        document.getElementById("ch1").style.color="red";
    }            
}
function passfunc2() 
{
    //second copy of password check checkbox (it specally for input2 tag)
    //this is password checking function 2nd copy
    let password1=document.getElementById("input2").value;
    document.getElementById("check").value=password1;
    if(password1.match(/[A-Z]/g))
    {
        document.getElementById("up").checked=true;
        document.getElementById("up").style.accentColor="green";
        document.getElementById("up1").style.color="green";
    }
    else
    {
        document.getElementById("up").checked=false;
        document.getElementById("up1").style.color="red";
    }
    if(password1.match(/[a-z]/g))
    {
        document.getElementById("lw").checked=true;
        document.getElementById("lw").style.accentColor="green";
        document.getElementById("lw1").style.color="green";
    }
    else
    {
        document.getElementById("lw").checked=false;
        document.getElementById("lw1").style.color="red";
    }
    if(password1.match(/[0-9]/g))
    {
        document.getElementById("ln").checked=true;
        document.getElementById("ln").style.accentColor="green";
        document.getElementById("ln1").style.color="green";
    }
    else
    {
        document.getElementById("ln").checked=false;
        document.getElementById("ln1").style.color="red";
    }
    if(password1.match(/[!@#$%^&*=+\/'";:-]/g))
    {
        document.getElementById("sp").checked=true;
        document.getElementById("sp").style.accentColor="green";
        document.getElementById("sp1").style.color="green";
    }
    else
    {
        document.getElementById("sp").checked=false;
        document.getElementById("sp1").style.color="red";
    }
    if(password1.match(/^.{6,}$/))
    {
        document.getElementById("ch").checked=true;
        document.getElementById("ch").style.accentColor="green";
        document.getElementById("ch1").style.color="green";
    }
    else
    {
        document.getElementById("ch").checked=false;
        document.getElementById("ch1").style.color="red";
    }            
}

//This function is for the password and re enter password tags 
//in this we check both passwords checkbox , both enter password (if not match the password) and for both case it check that the password full fill all the checkboxes 
function clr()
{
    if( document.getElementById("input2").value != "" && document.getElementById("input3").value == "")
    {
        document.onclick=function(ck)
        {
            if(ck.target.id == "input2")
            {
                passfunc2();
            }
            else if(ck.target.id == "input3")
            {
                document.getElementById("check").value="";
                document.getElementById("up1").style.color="blue";
                document.getElementById("lw1").style.color="blue";
                document.getElementById("ln1").style.color="blue";
                document.getElementById("sp1").style.color="blue";
                document.getElementById("ch1").style.color="blue";
                document.getElementById("up").checked=false;
                document.getElementById("lw").checked=false;
                document.getElementById("ln").checked=false;
                document.getElementById("sp").checked=false;
                document.getElementById("ch").checked=false;
            }
        }
    }
    else if( document.getElementById("input2").value == "" && document.getElementById("input3").value != "")
    {
        document.onclick=function(ck)
        {
            if(ck.target.id == "input3")
            {
                passfunc();
            }
            else if(ck.target.id == "input2")
            {
                document.getElementById("check").value="";
                document.getElementById("up1").style.color="blue";
                document.getElementById("lw1").style.color="blue";
                document.getElementById("ln1").style.color="blue";
                document.getElementById("sp1").style.color="blue";
                document.getElementById("ch1").style.color="blue";
                document.getElementById("up").checked=false;
                document.getElementById("lw").checked=false;
                document.getElementById("ln").checked=false;
                document.getElementById("sp").checked=false;
                document.getElementById("ch").checked=false;
            }
        }
    }
    else if( document.getElementById("input2").value != "" && document.getElementById("input3").value != "")
    {
        document.onclick=function(ck)
        {
            if(ck.target.id == "input3")
            {
                passfunc();
            }
            else if(ck.target.id == "input2")
            {
                passfunc2();
            }
        }
    }
    else if( document.getElementById("input2").value == "" && document.getElementById("input3").value == "")
    {
        document.getElementById("up1").style.color="blue";
        document.getElementById("lw1").style.color="blue";
        document.getElementById("ln1").style.color="blue";
        document.getElementById("sp1").style.color="blue";
        document.getElementById("ch1").style.color="blue";
        document.getElementById("up").checked=false;
        document.getElementById("lw").checked=false;
        document.getElementById("ln").checked=false;
        document.getElementById("sp").checked=false;
        document.getElementById("ch").checked=false;
    }
}

function areAllCheckboxesChecked() 
{
    var checkboxes = document.getElementsByName("checkbox");
    var x = true;
    for (var t = 0; t < checkboxes.length; t++) 
    {
        if (checkboxes[t].checked == false) 
        {
            x=false; // At least one checkbox is not checked
        }
    }
    if(x==false)
    {
        return false;
    }
    else if(x==true)
    {
        return true;
    }

}
//---------------------------------------------[end]-----------------------------------------------
let e_msg=document.getElementById("error_msg");
//---------------------------------------[this is for the email with password check for return ture or false]------------------------

function emailfunc1()
{
    let checkbox_ret=areAllCheckboxesChecked();
    email=document.getElementById("input1").value;
    p2=document.getElementById("input2").value;
    p3=document.getElementById("input3").value;
    if(email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/) && checkbox_ret == true && p2==p3)
    {
        e_message="Thank You...";
        len_e="";
        display_err_msg();
        return true;
    }
    else if(!email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,10})$/) && checkbox_ret == true)
    {
        len_e="Sorry! Your Email is not Correct format...";
        e_message="Sorry! Your Email is not Correct format...";
        if(!email.match(/([a-zA-Z0-9._-])+[@]/g))
        {
            e_message += "I think You can't write anyting or wrong the front of (@) \n(like- example@gmail.com)";
        }
        else if(!email.match(/[@]/g))
        {
            e_message += "I think You can't write anyting or wrong (@)...";
        }
        else if(!email.match(/([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)/g))
        {
            e_message += "I think You can't write anyting or wrong after the (@)... \n(like - @gmail.com)";
        }
        else if(!email.match(/([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})/g))
        {
            e_message += "I think You can't write anyting or wrong after (.) \n(like - .com)";
        }
        display_err_msg();
        return false;
    }
    else if(email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/) && checkbox_ret == false && p3==p2)
    {
        e_message="Please Check Your Password... \n[Tips:- Check all boxes are Marked]";
        display_err_msg();
        return false;
    }
    else if(email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/) && p3!=p2 && checkbox_ret == true)
    {
        e_message = "Please Check Your Password...\n";
        len_e=e_message;
        e_message += "I think You can't enter same Password...";
        display_err_msg()
        return false;
    }
    else
    {
        e_message = "Please fillup All inputs...";
        display_err_msg()
       return false;
    }
}

function pass_chk_func()
{
    p2=document.getElementById("input2").value;
    p3=document.getElementById("input3").value;
    if(document.getElementById("up","lw","ln","sp","ch").checked)
    {
        return true;
    }
    else if(p3!=p2 && document.getElementById("up","lw","ln","sp","ch").checked)
    {
        e_message = "Please Check Your Password...";
        len_e=e_message.length;
        e_message += "\nI think You can't enter same Password...";
        display_err_msg();
        return false;
    }
    else
    {
        e_message="Please Check Your Password...";
        display_err_msg();
        return false;
    }
}

function email_chk_func()
{
    email=document.getElementById("input2").value;
    if(email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/))
    {
        return true;
    }
    else
    {
        e_message ="Sorry! Your Email is not Correct format...";
        len_e=e_message.length;
        if(!email.match(/([a-zA-Z0-9._-])+[@]/g))
        {
            e_message += "\n I think You can't write anyting or wrong the front of (@) (like- example@gmail.com)";
        }
        else if(!email.match(/[@]/g))
        {
            e_message += "\n I think You can't write anyting or wrong (@)...";
        }
        else if(!email.match(/([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)/g))
        {
            e_message += "\n I think You can't write anyting or wrong after the (@)... \n(like - @gmail.com)";
        }
        else if(!email.match(/([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})/g))
        {
            e_message += "\n I think You can't write anyting or wrong after (.) (like - .com)";
        }
        display_err_msg();
        return false;
    }
}

function emailfunc()
{
    let checkbox_ret=areAllCheckboxesChecked();
    email=document.getElementById("input2").value;
    if(email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/) && checkbox_ret == false)
    {
        e_message="Please Enter Password correct way...\n";
        display_err_msg()
        return false;
    }
    else if(!email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/) && checkbox_ret == true)
    {
        len_e="Sorry! Your Email is not Correct format...";
        e_message="Sorry! Your Email is not Correct format...";
        if(!email.match(/([a-zA-Z0-9._-])+[@]/g))
        {
            e_message += "I think You can't write anyting or wrong the front of (@) \n(like- example@gmail.com)";
        }
        else if(!email.match(/[@]/g))
        {
            e_message += "I think You can't write anyting or wrong (@)...";
        }
        else if(!email.match(/([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)/g))
        {
            e_message += "I think You can't write anyting or wrong after the (@)... \n(like - @gmail.com)";
        }
        else if(!email.match(/([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})/g))
        {
            e_message += "I think You can't write anyting or wrong after (.) \n(like - .com)";
        }
        display_err_msg();
        return false;
    }
    else if(email.match(/^([a-zA-Z0-9._-])+(@)+([a-zA-Z0-9])+(\.)+([a-zA-Z]{2,4})$/) && checkbox_ret == true)
    {
        e_message="Thank You...";
        len_e="";
        display_err_msg();
        return true;
    }
    else
    {   
        e_message="Please write proper way...\nyour Email and Password both...";
        display_err_msg();
        return false;
    }
}

//------------------------------------------------------[end]---------------------------------------------------------------

function display_err_msg()
{   
    let img=document.getElementById("img1");
    let img1=document.getElementById("img2");
    m=l=e_message.length;
    j=len_e.length;
    i=0;
    if(len_e == "")
    {
        if(width <= 770)
        {
            img1.style.left= "10vw";
            img1.style.height="23vh";
            img1.style.width="41vw";
        }
        else if(width > 770)
        {
            img.style.left= "-41vw";
            img.style.height="35vh";
            img.style.width="22vw";
        }
        setTimeout(() => 
        {
            typewritter();
        }, 1600);

        let timeout2=(l*40)+3000;
        setTimeout(() => 
        {
            typewritter2_esce();
        }, timeout2);

        time=(l*40)+3000+4000;
        setTimeout(function()
        {
            if(width <= 770)
            {
                img1.style.height="0vh";
                img1.style.width="0vw";
                img1.style.left= "10vw";
            }
            else if(width > 770)
            {
                e_msg.value="";
                img.style.height="0vh";
                img.style.width="0vw";
                img.style.left= "-24vw";
            }
        },time);
    }

    else if(len_e != "")
    {
        if(width <= 770)
        {
            img1.style.left= "10vw";
            img1.style.height="23vh";
            img1.style.width="41vw";
        }
        else if(width > 770)
        {
            img.style.left= "-41vw";
            img.style.height="35vh";
            img.style.width="22vw";
        }
        setTimeout(() => 
        {
            typewritter1();

            let timeout=(j*40)+2000;
            setTimeout(() => 
            {
                typewritter_esce();
            }, timeout);

            let timeout1=(j*40)+2000+3000;
            setTimeout(() => 
            {
                typewritter2();
            }, timeout1);
            
            let timeout2=(j*40)+2000+3000+3000;
            setTimeout(() => 
            {
                typewritter2_esce();
            }, timeout2);

        }, 1600);
        time2=(j*40)+2000+3000+3000+8000;
        setTimeout(function()
        {
            if(width <= 770)
            {
                img1.style.height="0vh";
                img1.style.width="0vw";
                img1.style.left= "10vw";
            }
            if(width > 770)
            {
                img.style.height="0vh";
                img.style.width="0vw";
                img.style.left= "-24vw";
            }
        },time2);
    }
}

function typewritter()
{
    if(i<l)
    {
        e_msg.value +=e_message.charAt(i);
        i++;
        e_msg.style.color="red";
        setTimeout(typewritter,40);
    }
}

function typewritter1()
{
    if(i<j)
    {
        e_msg.value +=len_e.charAt(i);
        i++;
        e_msg.style.color="red";
        setTimeout(typewritter1,40);
    }
}
function typewritter_esce() 
{
    if (i>=0) 
    {
        e_msg.value = e_msg.value.substring(-1, i);
        i--;
        setTimeout(typewritter_esce, 40);
    }
}
function typewritter2()
{
    if(j<l)
    {
        i=l;
        e_msg.value +=e_message.charAt(j);
        j++;
        e_msg.style.color="green";
        setTimeout(typewritter2,40);
    }
}
function typewritter2_esce() 
{
    if (m>=0) 
    {
        e_msg.value = e_msg.value.substring(-1, m);
        m--;
        setTimeout(typewritter2_esce, 40);
    }
}

function cl_show(callback)
{   
    if(cl_msg <= cx)
    {
        document.getElementById("cl").style.width=cl_msg + "ch";
        //console.log(document.getElementById("cl").style.width)
        console.log(document.getElementById("cl").innerHTML);
        document.getElementById("cl").innerHTML+=cl_message.charAt(cl_msg);
        cl_msg++;
        setTimeout(function () {
            cl_show(callback);
        }, 100);
    }
    else 
    {
        callback(true);
    }
}

function cl_show() {
    return new Promise((resolve) => {
        function showNextCharacter() {
            if(cl_msg <= cx)
            {
                document.getElementById("cl").style.width=cl_msg + "ch";
                console.log(document.getElementById("cl").innerHTML);
                document.getElementById("cl").innerHTML+=cl_message.charAt(cl_msg);
                cl_msg++;
                setTimeout(showNextCharacter, 100);
            }
            else {
                resolve(true);
            }
        }
        showNextCharacter();
    });
}

function cl_delete()
{
    if(cl_msg >= 0)
    {
        document.getElementById("cl").style.width=cl_msg + "ch";
        //console.log(document.getElementById("cl").style.width)
        document.getElementById("cl").innerHTML += "";
        cl_msg--;
        setTimeout(cl_delete, 100);
    }
}