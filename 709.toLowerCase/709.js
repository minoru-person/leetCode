var toLowerCaseMy = function(str){
    //var myChar;
    var myStr;
    var myArray =[];
    
    for(var i=0; i<str.length; i++){
    
	     if(64<str.charCodeAt(i) && str.charCodeAt(i)<91){
                  //myChar = str.charCodeAt(i);
	          //myChar = myChar + 32;
	          myStr = String.fromCharCode(str.charCodeAt(i));
	    	    myArray.push(myStr);
	     } else {
	          myArray.push(str.charAt(i));
	     }
       
    }
    
    myArray = myArray.join('');
    return myArray;
};
