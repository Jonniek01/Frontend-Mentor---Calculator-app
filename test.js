function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

console.log(reverseNumberFormat(33,452))