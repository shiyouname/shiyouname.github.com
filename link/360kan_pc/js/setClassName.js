// JavaScript Document
function getClassName(oParent,sClass){
	function findInArr(str,arr){
		for(var i=0;i<arr.length;i++){
			if(str==arr[i]){
				return true;
			}	
			
		}	
		return false;
	}
	var aEla=oParent.getElementsByTagName('*');
	var result=[];
	for(var i=0;i<aEla.length;i++){
			var arr=aEla[i].className.split(' ');
			if(findInArr(sClass,arr)){
					result.push(aEla[i]);
			}
			
	}
	return result;
		
}