const tabItems = document.querySelectorAll('.box');
const tabContentItems = document.querySelectorAll('.tabcontent');

function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('active');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('active');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});