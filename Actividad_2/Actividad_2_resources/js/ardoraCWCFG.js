//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="FELICIDADES, ERES EL MEJOR"; messageTime=""; messageError="Oopss, sigue intentando"; messageErrorG="Oopss, sigue intentando"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","Vw","RQ","Qg","RQ","QQ","Uw","WQ","UA","Ug","Tw",""],["","","Rw","","","","","","","VQ","","","","",""],["","","Tw","","","","","","","Qg","","","","",""],["","","Tw","","","","Tg","","","TA","","","","",""],["","","Rw","","","","Tw","","","SQ","","","","",""],["","","TA","","","","VA","","","TQ","","","","",""],["RA","Ug","RQ","QQ","TQ","Vw","RQ","QQ","Vg","RQ","Ug","","","",""],["","","Uw","","","","UA","","","VA","","","","",""],["","","SQ","","","","QQ","","","RQ","","","","",""],["","","VA","","","","RA","","","WA","","","","",""],["","","RQ","","","","UA","","","VA","","","","",""],["","","Uw","","","","TA","","","","","","","",""],["","","","","","","VQ","","","","","","","",""],["","","","Vw","RQ","Qg","Uw","SQ","VA","RQ","WA","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[1,10,7,4,5,3];
var y1=[7,1,4,14,1,2];
var x2=[11,10,7,11,14,3];
var y2=[7,11,14,14,1,12];
var imaCW=["","","","","",""];
var audioCW=["","","","","",""];
var defCW=["Programa de la empresa Adobe Adobe que sirve para diseño y programación web, básicamente para hacer o modificar páginas de Internet. Para utilizarlo necesitas al menos algún conocimiento de lenguaje Html o PHP.","Editor de texto y editor de código fuente escrito en C++ y Python para los plugins. Desarrollado originalmente como una extensión de Vim.","Editor que se parece al Bloc de notas en cuanto al hecho de que puede editar texto sin formato y de forma simple. No obstante, incluye opciones más avanzadas que pueden ser útiles para usuarios avanzados como desarrolladores y programadores.","Software de INCOMEDIA para Windows, disponible en español, que te permite crear páginas web sin necesidad de programar, en tan sólo 5 pasos.","Software de Tipo Shareware enfocado a usuarios inexpertos sin absolutamente ningún conocimiento sobre la creación de páginas web.","Aplicación en línea gratuita ofrecida por la empresa estadounidense Google como parte de la suite de productividad de G Suite"];
var colNum=15;
var rowNum=15;
