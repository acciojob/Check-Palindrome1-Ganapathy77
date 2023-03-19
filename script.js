// complete the given function

function palindrome(str){
	let str = str.toLowerCase;
	let str = str.replace(' ', '');
	let i=0, j=str.length-1;
	while(i<j){
		if(str[i] !== str[j]){
			return false;
		}
		i++;  
		j--;
	}
}
module.exports = palindrome
