// SERVICES
let active = document.querySelector("#point-one");

const pointOne = document.querySelector("#point-one");
const pointTwo = document.querySelector("#point-two");
const pointThree = document.querySelector("#point-three");
const pointFour = document.querySelector("#point-four");

const serviceTitle = document.querySelector("#service-title");
const serviceImg = document.querySelector("#service-img");

const serviceText = document.querySelector("#service-text");

const serviceTime = document.querySelector("#service-time");
const servicePrice = document.querySelector("#service-price");

const btnOne = document.querySelector("#btn-one");
const btnTwo = document.querySelector("#btn-two");
const btnThree = document.querySelector("#btn-three");
const btnFour = document.querySelector("#btn-four");


btnOne.onclick = () => {
	active.classList.toggle("active");
	pointOne.classList.toggle("active");
	active = pointOne;

	serviceTitle.textContent = 'Перетяжка мягкой мебели';
	serviceImg.src = './img/services/info/01.jpg';
	serviceText.textContent = 'В 86% случаев каркаса мягкой мебели служит дольше обивки и наполнителя в 2-3 раза. Этот факт позволяет экономить 70-80% бюджета, каждый раз, когда Вы задумались о покупке нового дивана или кровати. Дизайнер приедет с образцами ткани на выбор. Мы бесплатно заберем и вернем обновленную мебель. Вам останется только любоваться и считать сэкономленные деньги.';
	serviceTime.textContent = 'от 1 до 10 дней';
	servicePrice.textContent = '5 000';
}

btnTwo.onclick = () => {
	active.classList.toggle("active");
	pointTwo.classList.toggle("active");
	active = pointTwo;

	serviceTitle.textContent = 'Перетяжка дивана';
	serviceImg.src = './img/services/info/02.jpg';
	serviceText.textContent = 'Работаем с прямыми и угловыми диванами. Вы можете выбрать из 500+ вариантов ткани. По вашей просьбе, заменим сломанные или износившиеся части дивана. Дополним дизайн декоративными элементами. На стоимость и сложность работы не влияет первоначальный материал. Например, кожаный диван можно обтянуть флоком.';
	serviceTime.textContent = 'от 4 до 9 дней';
	servicePrice.textContent = '5 000';
}

btnThree.onclick = () => {
	active.classList.toggle("active");
	pointThree.classList.toggle("active");
	active = pointThree;

	serviceTitle.textContent = 'Перетяжка кресла';
	serviceImg.src = './img/services/info/03.jpg';
	serviceText.textContent = 'От винтажных кресел ручной работы до современных конвейерных. Можем перетянуть кресло на дому или бесплатно вывезти мастерскую. Даем гарантию от 1 года. В 87% случаев уложимся в 1-3 дня. Ежегодно перетягиваем 300-350 кресел.';
	serviceTime.textContent = 'от 1 до 3 дней';
	servicePrice.textContent = '3 500';
}

btnFour.onclick = () => {
	active.classList.toggle("active");
	pointFour.classList.toggle("active");
	active = pointFour;

	serviceTitle.textContent = 'Перетяжка стульев';
	serviceImg.src = './img/services/info/04.jpg';
	serviceText.textContent = 'Работаем с антикварными стульями ручной работы и с современными моделями, произведенными на заводе. Самый старый наш “пациент” был произведен на фабрике Ф.Ф Мельцера в 1889 году. Вызовите мастера прямо сейчас. Это абсолютно бесплатно. Дополнительная скидка от 5% при заказе перетяжки нескольких стульев.';
	serviceTime.textContent = 'от 1 до 2 дней';
	servicePrice.textContent = '600';
}

const form = document.querySelector("#form");
function button() {
	form.classList.toggle("active");
}

function messageClose(){
	const message = document.querySelector("#message");
	message.classList.remove("active");
}

AOS.init();


