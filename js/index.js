var phone_memory,
	phone_color,
	image,
	price;

do{
	phone_memory = +prompt('Choose memory: 32 / 64 / 128', '');
	if (isNaN(phone_memory)) {
		alert("Sorry, but you need enter a number - try again");
	}else if(phone_memory !== 32 && phone_memory !== 64 && phone_memory !== 128){
		alert("Sorry, but we haven't phones with this memory");
	}
}
while(phone_memory !== 32 && phone_memory !==  64 && phone_memory !== 128 && phone_memory !== NaN && phone_memory !== null);

do{
	phone_color = prompt('Choose color: red / green / yellow', '');
	if(!isNaN(phone_color)){
		alert("Sorry, but you need enter a color - try again");
	}else if(phone_color !== 'red' && phone_color !== 'green' && phone_color !== 'yellow') {
		alert("Sorry, but we haven't phones in this color");
	}
}
while(phone_color !== 'red' && phone_color !== 'green' && phone_color !== 'yellow');

if (phone_memory === 32) {
	price = 500;
}else if(phone_memory === 64){
	price = 600;
}else{
	price = 700;
}

if (phone_color === 'red') {
	price = price + 50;
}else if(phone_color === 'green'){
	price = price + 100;
}else{
	price = price + 150;
}

image = phone_color;

document.write('<h3>You choose:</h3>' + 'Memory: <b>' + phone_memory + 'Gb</b></br>' + 'Color: <b>' + phone_color + '</b></br>' + 'Price: <b>' + price + ' $</b></br>');
document.write('<img src="images/' + image + '.png"></br>');







