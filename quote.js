var quotes=new Array(7);
var authors=new Array(7);
quoteaction();
function quoteinitialize()
{
quotes[0]="The good times of today, are the bad thoughts of tomorrow";
authors[0]="Bob Marley";
quotes[1]="Despite everything, I believe that people are really good at heart";
authors[1]="Anne Frank";
quotes[2]="There is nothing good or bad but thinking makes it so";
authors[2]="William Shakespeare";
quotes[3]="Good judgment comes from experience, and a lot of that comes from bad judgment";
authors[3]="Will Rogers";
quotes[4]="Inorder to succeed we must believe that we can";
authors[4]="Nicos Kazantkatis";
quotes[5]="You have to dream before your dreams can come true";
authors[5]="APJ Abdul Kalam";
quotes[6]="The secret of getting ahead is getting started";
authors[6]="Mark Twain";
}
function quoteaction()
{
quoteinitialize();
var d = new Date();
var n = d.getDay();
document.getElementById("quotebox").innerHTML = "\" "+quotes[n]+" \"" ;
document.getElementById("authorbox").innerHTML ="-  "+ authors[n] ;
}