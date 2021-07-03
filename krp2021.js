var km;
var marks=new Array(3);
var gmean=new Array(3);
var gsd=new Array(3);
var mean=new Array(3);
var sd=new Array(3);
var i;
var samrank=new Array(50);
var sammark=new Array(50);
for(i=0;i<3;i++)
 {
 mean[i]=new Array(3);
 sd[i]=new Array(3);
 }
var tot=new Array(3)
tot[0]=120;
tot[1]=120;
tot[2]=100;
var flag=0;
document.getElementById("stream").selectedIndex="0";
function values()
 {
 gmean[0]=67.47;
 gmean[1]=67.07;
 gmean[2]=62.4;
 gsd[0]=15.17;
 gsd[1]=15.9;
 gsd[2]=19.78;
 mean[0][0]=67.9;
 mean[0][1]=69.9;
 mean[0][2]=61.2;
 mean[1][0]=70.5;
 mean[1][1]=69.3;
 mean[1][2]=64.6;
 mean[2][0]=67.78;
 mean[2][1]=64.66;
 mean[2][2]=66.5;
 sd[0][0]=16.16;
 sd[0][1]=16.29;
 sd[0][2]=20.45;
 sd[1][0]=13.98;
 sd[1][1]=14.5;
 sd[1][2]=20.8;
 sd[2][0]=17.2;
 sd[2][1]=16.01;
 sd[2][2]=18.54;
 samrank[0]=1;sammark[0]=600;
 samrank[1]=1;sammark[1]=585;
 samrank[2]=5;sammark[2]=576;
 samrank[3]=70;sammark[3]=569;
 samrank[4]=130;sammark[4]=556.72;
 samrank[5]=200;sammark[5]=509.61;
 samrank[6]=1800;sammark[6]=400.54;
 samrank[7]=12775;samrank[7]=364.35;
 samrank[8]=15000;sammark[8]=342.42;
 samrank[9]=19000;sammark[9]=309.69;
 samrank[10]=23000;sammark[10]=291.13;
 samrank[11]=28000;sammark[11]=273.28;
 samrank[12]=31000;sammark[12]=255.17;
 samrank[13]=36200;sammark[13]=239;
 samrank[14]=42854;sammark[14]=174.9;
 samrank[15]=46686;sammark[15]=166;
 }
function predictrank()
{
flag=0;
values();
km= parseInt(document.getElementById("sub0").value);
marks[0] = parseInt(document.getElementById("sub1").value);
marks[1] = parseInt(document.getElementById("sub2").value);
marks[2] = parseInt(document.getElementById("sub3").value);
if(km>960 || isNaN(km))
  flag=1;
for(i=0;i<3;i++)
  if(marks[i]>tot[i] || isNaN(marks[i]))
       flag=1;
if(flag==1)
  {
  alert("Incorrect marks");
  return;
  }
km=(km*300)/960;
for(i=0;i<3;i++)
   marks[i] =(marks[i]*100)/tot[i];
var index=document.getElementById("stream").selectedIndex;
for(i=0;i<3;i++)
 {
 marks[i]=gmean[i]+(gsd[i]*((marks[i]-mean[index][i])/sd[index][i]));
 }
for(i=0;i<3;i++)
  km+=marks[i];
km=Math.round(km*100)/100;
document.getElementById("score").innerHTML=km;
var rank;
var mid=0;
var mxid=15;
for(i=0;i<16;i++)
  {
  if(sammark[i]>=km && sammark[mid]>sammark[i])
      mid=i;
  if(sammark[i]<=km && sammark[mxid]<sammark[i])
      mxid=i;
  }
rank=samrank[mid]+(((samrank[mxid]-samrank[mid])/(sammark[mxid]-sammark[mid]))*(km-sammark[mid]));
rank=Math.round(rank);
document.getElementById("rank").innerHTML=rank;
document.getElementById("predresbox").style.display="block";
document.getElementById("collegepredbox").style.display="block";
document.getElementById("adspace").style.display="block";
}
function closedivs()
{
document.getElementById("predresbox").style.display="none";
document.getElementById("collegepredbox").style.display="none";
document.getElementById("adspace").style.display="none";
}
function changemark()
{
var x=document.getElementById("stream").selectedIndex;
switch(x)
 {
 case 0:document.getElementById("markp").innerHTML= "120";
        document.getElementById("markc").innerHTML= "120";
        document.getElementById("markm").innerHTML= "100";
        tot[0]=120;
        tot[1]=120;
        break;
 default:document.getElementById("markp").innerHTML= "100";
         document.getElementById("markc").innerHTML= "100";
         document.getElementById("markm").innerHTML= "100";
         tot[0]=100;
         tot[1]=100;
 }
}
