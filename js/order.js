
async function orderBTN(){


	let error = 0;
	
	let formName = document.querySelector("#order-name");
	let formNumber = document.querySelector("#order-phone");
	let formCheckboxInput = document.querySelector('#order-checkbox');
	let formCheckboxLabel = document.querySelector('#order-checkbox-label');
	
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
		<b>Имя: ${formName.value}</b>
		<b>Номер: ${formNumber.value}</b>
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
			formName.value = "";
			formNumber.value = "";
			formCheckboxInput.checked = false;

		}
		else{
			showMessage(false);

		}
	}
}


function showMessage(isSuccess) { 

	if(isSuccess) {
		form.classList.remove("active")
		boolMessage(true);
	
	}
	else{

	}
}

