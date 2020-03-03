/* counter */
let defaultCount = $('#counter').html()
let count = parseInt(defaultCount)

$('#buttonAdd').click(function(){
	$('#counter').text(count += 1)
})

$('#buttonSubtract').click(function(){
	$('#counter').text(count -= 1)
})

$('#buttonReset').click(function(){
	count = 0
	$("#counter").html(0)
})



/* double font size */
let fontSize = 13;

let doubleFontSize = function(){
	let newFontSize = (fontSize*2);
	fontSize = newFontSize;
	$('#fontUpdate').css('fontSize', ((fontSize) + 'px'))
}
$("#buttonDoubleFontSize").click(function(){
	doubleFontSize();
	$(fontValue).text(fontSize + 'px')
})




/* change background color*/
function generate() {

  let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  let newColor = "#";
  
  for ( let i = 0; i < 6; i++ ) {
    let color = Math.round( Math.random() * 14 );
    let newHexValue = hexValues[color];
    newColor += newHexValue;
  }
	document.getElementById("changeColor").style.backgroundColor = newColor;
	document.getElementById("output").innerHTML = newColor;
}

$("#buttonChangeBackgroundColor").click(function(){
	generate();
})

