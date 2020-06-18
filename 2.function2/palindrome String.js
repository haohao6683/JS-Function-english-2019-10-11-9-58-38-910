function isPalindrome(str){
    if (typeof str !== 'string' || str.constructor !== String) {
	return false;
    }
    var len = parseInt((str.length+1)/2);
    for(var i=0; i<len; i++){
	if (str[i] !== str[str.length-i-1]) {
	    return false;
	}
    }
    return true;
}
alert(isPalindrome('adddddda'));//true
alert(isPalindrome('addddda'));//true
alert(isPalindrome('adddasd'));//false