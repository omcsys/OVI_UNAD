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
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime=""; messageError="Te has equivocado"; messageErrorG="Te has equivocado"; messageAttempts="Has sobrepasado el límite de intenro"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzE"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","SA","VA","VA","UA","","","","","","",""],["","","","","RQ","","","","","","","","SA","",""],["","","","Sg","QQ","Vg","QQ","Uw","Qw","Ug","SQ","UA","VA","",""],["","","","","RA","","","","QQ","","","","TQ","",""],["","","","","","","","","RA","","","","TA","",""],["","","","","","RA","","","RQ","","","Vg","","",""],["","","","","","SQ","","","Tg","","","QQ","","",""],["","","","Tg","QQ","Vg","RQ","Rw","QQ","RA","Tw","Ug","","",""],["","","","","","","","","","","","SQ","","",""],["","","","","","","UA","QQ","Rw","SQ","Tg","QQ","","",""],["","","","","","","","","","","","Qg","","",""],["","","","","","","","","","","","TA","SQ","Tg","Sw"],["","","","","","","","","","","","RQ","","",""]];
var x1=[4,5,5,13,9,4,12,12,6,7];
var y1=[5,3,3,4,5,10,8,14,8,12];
var x2=[13,5,8,13,9,12,12,15,6,12];
var y2=[5,6,3,7,10,10,15,14,10,12];
var imaCW=["","","","","","","","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas.","Este elemento, define la cabecera de nuestro documento HTML, donde podemos hacer referencias a todos los scripts, hojas de estilos, titulo del documento, datos para buscadores, etc.","Protocolo estándar de transferencia de hipertexto. Es decir: el protocolo de comunicaciones en el que está basado la Word Wide Web.","Lenguaje informático para crear páginas web","Tipo de variable que se utiliza para almacenar caracteres, palabras o frases de texto.","Programa que permite navegar por internet u otra red informática de comunicaciones.","Espacio reservado en la memoria que, como su nombre indica, pueden cambiar de contenido a lo largo de la ejecución de un programa","Este elemento permite relacionar el HTML de nuestra web con el css. También admite otros tipos de documento, pero lo más común, es enlazar las hojas de estilos con las plantillas HTML,","Es el elemnto más utilizado en HTML 4 y sirve para agrupar contenidos. Esto nos permite dar estio de forma sencilla a una sección o grupo de elementos.","Documento creado en formato HTML que es parte de un grupo de documentos hipertexto o recursos disponibles en la World Wide Web."];
var colNum=15;
var rowNum=15;
