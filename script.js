
let shortHex;
// Do not change the code below.
 shortHex= prompt("Enter Short Hex.");


let i=shortHex.length-3,temp="#",isAnyCapital=false;
const extendHex = (shortHex) => {
  while (i<shortHex.length) {
  	temp+=shortHex[i]+shortHex[i];
	  i++;
	  if(shortHex[i]>=65&&shortHex[i]<=90){
		  isAnyCapital=true;
	  }
  }

	if(isAnyCapital){
		return temp.toUpperCase();
	}
	return temp;
};
alert(extendHex(shortHex));