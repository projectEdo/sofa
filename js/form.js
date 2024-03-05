// FORM
// import boolMessage from './message.js';



document.addEventListener("DOMContentLoaded", function(){
	

	const formConteiner = document.querySelector(".form-conteiner");

	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		
		
		formConteiner.classList.add('_sending');

		let error = 0;
		
		let formName = document.querySelector("#form-name");
		let formNumber = document.querySelector("#form-phone");
		let formCheckboxInput = document.querySelector('#checkbox-input');
		let formCheckboxLabel = document.querySelector('#checkbox-label');
		
		const data = {
			inputName: formName,
			inputNumber: formNumber,
			inputCheckboxInput: formCheckboxInput,
			inputCheckboxLabel: formCheckboxLabel,
		};
		
		error = inputReq(data);
		
		

		if (error){
			const TOKEN = '6866716705:AAF4Z-c21Zx1wHj8aMvaW-zx8HGsm53NYd0';
			const CHAT_ID = '-1002104808880';
			const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

			let message = `
			<b>Новая заявка:</b>
			<b>Имя: ${this.firstName.value}</b>
			<b>Номер: ${this.phoneNumber.value}</b>
			`;

			const responseTel = await fetch(URI_API, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text: message,
					parse_mode: 'html'
				}),
			});

			const result = await responseTel.json();
			

			if(result.ok){
				showMessage(true);
				form.reset();
				formConteiner.classList.remove('_sending');

			}
			else{
				showMessage(false);

			}
		}
		else {
			formConteiner.classList.remove('_sending');
		}
		


	// 	// let error = 0;
	// 	// let formData = new FormData(form);

	// 	// if(error === 0){
	// 	// 	formConteiner.classList.add('_sending');

	// 	// 	let response = await fetch('sendmail.php', {
	// 	// 		method: 'POST',
	// 	// 		body: formData
	// 	// 	});
	// 	// 	if (response.ok) {
	// 	// 		let result = await response.json();
	// 	// 		alert(result.message);
	// 	// 		formPreview.innerHTML = '';
	// 	// 		form.reset();
	// 	// 		formConteiner.classList.remove('_sending');
	// 	// 	}
	// 	// 	else {
	// 	// 		alert(ошибка);
	// 	// 		formConteiner.classList.remove('_sending');
	// 	// 	}
	// 	// }
	}


	function showMessage(isSuccess) { 

		if(isSuccess) {
			form.classList.remove("active")
			boolMessage(true);
		
		}
		else{

		}
	}

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


});