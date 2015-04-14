function ajaxInt(){
	var xmlhttp;
	try{
		xmlhttp=new XMLHttpRequest();
	}catch(e){
		try{
			xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
		}catch(ex){
			try{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}catch(exc){
				xmlhttp=false;
			}
		}
	}
	return xmlhttp;
}
function master(alvo,action){
	var cont=document.getElementById(alvo);
	cont.innerHTML="Carregando";
	ajax=ajaxInt();
	var url='function.php?action='+action;
	if(ajax){
		ajax.open('GET',url,true);
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4){
				if(ajax.status==200){
					cont.innerHTML=ajax.responseText;
				}
			}
		}
	}
	ajax.send(null);	
}
function master2(alvo,action){
	var cont=document.getElementById(alvo);
	cont.innerHTML="Carregando";
	ajax=ajaxInt();
	var url='http://robertrodrigues.zz.vc/Manga count/function.php?action='+action;
	if(ajax){
		ajax.open('GET',url,true);
		ajax.onreadystatechange=function(){
			if(ajax.readyState==4){
				if(ajax.status==200){
					cont.innerHTML=ajax.responseText;
				}
			}
		}
	}
	ajax.send(null);	
}