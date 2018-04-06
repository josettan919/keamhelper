var quotes=new Array(7);
var authors=new Array(7);
quoteaction();
function quoteinitialize()
{
quotes[0]="With the new day comes new strength and new thoughts";
authors[0]="Eleanor Roosevelt";
quotes[1]="You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character";
authors[1]="Anonymous";
quotes[2]="It’s Not Whether You Get Knocked Down, It’s Whether You Get Up";
authors[2]="Vince Lombardi";
quotes[3]="Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?";
authors[3]="Brian Tracy";
quotes[4]="Creativity Is Intelligence Having Fun";
authors[4]="Albert Einstein";
quotes[5]="Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You";
authors[5]="Brian Tracy";
quotes[6]="Today’s Accomplishments Were Yesterday’s Impossibilities";
authors[6]="Robert H. Schuller";
}
function quoteaction()
{
quoteinitialize();
var d = new Date();
var n = d.getDay();
document.getElementById("quotebox").innerHTML = "\" "+quotes[n]+" \"" ;
document.getElementById("authorbox").innerHTML ="-  "+ authors[n] ;
}
