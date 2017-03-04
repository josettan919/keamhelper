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
 gmean[0]=65.3;
 gmean[1]=68.3;
 gmean[2]=61.2;
 gsd[0]=15.17;
 gsd[1]=16.12;
 gsd[2]=19.6;
 mean[0][0]=65.05;
 mean[0][1]=66.03;
 mean[0][2]=58.65;
 mean[1][0]=63.6;
 mean[1][1]=63.4;
 mean[1][2]=63.7;
 mean[2][0]=68.3;
 mean[2][1]=66.66;
 mean[2][2]=75.15;
 sd[0][0]=14.8;
 sd[0][1]=17.15;
 sd[0][2]=18.61;
 sd[1][0]=14.7;
 sd[1][1]=16.9;
 sd[1][2]=21.5;
 sd[2][0]=16.4;
 sd[2][1]=15.71;
 sd[2][2]=17.17;
 samrank[0]=1;sammark[0]=600;
 samrank[1]=1;sammark[1]=585;
 samrank[2]=5;sammark[2]=576;
 samrank[3]=10;sammark[3]=569;
 samrank[4]=65;sammark[4]=553;
 samrank[5]=654;sammark[5]=491;
 samrank[6]=2297;sammark[6]=436;
 samrank[7]=3610;sammark[7]=414;
 samrank[8]=41;sammark[8]=559;
 samrank[9]=33;sammark[9]=561;
 samrank[10]=113;sammark[10]=543;
 samrank[11]=147;sammark[11]=536;
 samrank[12]=155;sammark[12]=535;
 samrank[13]=15064;sammark[13]=334;
 samrank[14]=7031;sammark[14]=379;
 samrank[15]=50297;sammark[15]=216;
 samrank[16]=9289;sammark[16]=370;
 samrank[17]=36804;sammark[17]=270;
 samrank[18]=41014;sammark[18]=250;
 samrank[19]=17308;sammark[19]=328;
 samrank[20]=19969;sammark[20]=321;
 samrank[21]=23668;sammark[21]=308;
 samrank[22]=60000;sammark[22]=176;
 samrank[23]=75000;sammark[23]=116;
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
var mxid=23;
for(i=0;i<24;i++)
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
