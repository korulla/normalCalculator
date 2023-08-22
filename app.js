var s, p, q
function clearbut()
{
    document.getElementById("screen").value=""
}
function ClickButton(val)
{
    document.getElementById("screen").value+=val
}
function ClickEqual()
{
    if(q==1)
    {
    p=document.getElementById("screen").value
    document.getElementById("screen").value=Number(s)*Number(p)
    }
    else if(q==2)
    {
    p=document.getElementById("screen").value
    document.getElementById("screen").value=Number(s)/Number(p)
    }
    else if(q==3)
    {
    p=document.getElementById("screen").value
    document.getElementById("screen").value=Number(s)-Number(p)
    }
    else if(q==4)
    {
    p=document.getElementById("screen").value
    document.getElementById("screen").value=Number(s)+Number(p)
    }
}   
function ClickOperation(val)
{
    if(val=='*')
    {   
        s=document.getElementById("screen").value
        document.getElementById("screen").value=""
        q=1
    }
    if(val=='/')
    {   
        s=document.getElementById("screen").value
        document.getElementById("screen").value=""
        q=2
    }
    if(val=='-')
    {   
        s=document.getElementById("screen").value
        document.getElementById("screen").value=""
        q=3
    }
    if(val=='+')
    {   
        s=document.getElementById("screen").value
        document.getElementById("screen").value=""
        q=4
    }
}
