function boolMessage(bool){
	const message = document.querySelector("#message");
	const messageImg = document.querySelector("#message-img");
	const messageTitle = document.querySelector("#message-title");
	const messageText = document.querySelector("#message-text");

	if(bool == true){
		message.classList.remove("active");
		
		messageImg.src = './img/message/true.png';
		messageTitle.textContent = 'Успех!';
		messageText.textContent = 'Ваша заявка отправлена.'

		message.classList.add("active");
	}
	else if(bool == false){
		message.classList.remove("active");
		
		messageImg.src = './img/message/false.png';
		messageTitle.textContent = 'Облом!';
		messageText.textContent = 'Заполните все необходимые поля.'
		
		message.classList.add("active");
	}
	else if(bool == "name"){
		message.classList.remove("active");
		
		messageImg.src = './img/message/false.png';
		messageTitle.textContent = 'Облом!';
		messageText.textContent = 'Введите ваше имя.'
		
		message.classList.add("active");
	}
	else if(bool == "number"){
		message.classList.remove("active");
		
		messageImg.src = './img/message/false.png';
		messageTitle.textContent = 'Облом!';
		messageText.textContent = 'Введите ваш телефон.'
		
		message.classList.add("active");
	}
	else if(bool == "checkbox"){
		message.classList.remove("active");
		
		messageImg.src = './img/message/false.png';
		messageTitle.textContent = 'Облом!';
		messageText.textContent = 'Поставьте галочку.'
		
		message.classList.add("active");
	}
	else {
		message.classList.remove("active");
		
		messageImg.src = './img/message/false.png';
		messageTitle.textContent = 'Упссс!';
		messageText.textContent = 'Какая-то ошибка...'
		
		message.classList.add("active");
	}
} 




function inputReq(object) {

	const reg = /[A-Za-zA-Яа-я]+$/;
	let error =0;

	if((!object.inputName.value) && (!object.inputNumber.value)){
		console.log("!value");
		boolMessage(false);
		
		if(!object.inputName.value) object.inputName.classList.add("false");
		else object.inputName.classList.remove("false");

		if(!object.inputNumber.value) object.inputNumber.classList.add("false");
		else object.inputNumber.classList.remove("false");
		
		return false;
	}
	else {
		if(!reg.test(object.inputName.value)){
		boolMessage("name");
		object.inputName.classList.add("false");
		error++;
		}
		else object.inputName.classList.remove("false");

		if(object.inputCheckboxInput.checked == false){
			boolMessage("checkbox");
			object.inputCheckboxLabel.classList.add("false")
			error++;
		}
		else object.inputCheckboxLabel.classList.remove("false")

		if(object.inputNumber.value.length < 18){ 
			boolMessage("number");
			object.inputNumber.classList.add("false");
			error++;
		}
		else 
		object.inputNumber.classList.remove("false");

		return error > 0 ? false : true;
		
	}
	
}