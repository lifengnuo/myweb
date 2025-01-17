    var a=1;
function open_nav()
{

if(a%2!=0)
{
var ash= document.getElementById('nav_ul'); 
ash.className = "navb";
}
else
{
var ash= document.getElementById('nav_ul'); 
ash.className = "nava";		
}
a++;
}