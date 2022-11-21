// Кнопка "Новая заметка"
const newNote = document.querySelector('#new-note');

// Вся форма заметки
const mainForm = document.querySelector('#main-form');

// Ваши заметки
const yourNotes = document.querySelector('.notes')

// Кнопка "Сохранить"
const saveBtn = document.querySelector('.save')

// span со значением для счетчика заметок
const spanCount = document.querySelector('.numb');

// Кнопки оформления текста
const textBold = document.querySelector('.textBold');
const textItalic = document.querySelector('.textItalic');

// Кнопка "Ваши заметки"
const savednotes = document.querySelector('#savednotes');

savednotes.addEventListener('click', showSavedNotes);

function showSavedNotes(event) {
	if (count !== 0){
		yourNotes.classList.toggle('activeNote');
	} 
}

// Создать новую форму
newNote.addEventListener('click', showForm);


function showForm() {
	mainForm.classList.toggle('active')
}

// Сохранение заметки
saveBtn.addEventListener('click', saveNote);

// Счетчик
let count = 0;

// Счетчик для безымянных заметок
let nonamecount = 0

// Счетчик для объявления id
let idCount = 0;
// Сохранение заметки
function saveNote(event) {


	event.preventDefault();

	// Создание блока для сохраненной заметки
	let newBlock1 = document.createElement('div');
	let newBlock2 = document.createElement('div');
	let newBlock3 = document.createElement('div');
	let delBtn = document.createElement('button');
	
	newBlock1.classList.add('savedNote');
	delBtn.classList.add('del-button');

	// Объявление id для новых блоков и кнопки удаления

	delBtn.id = idCount
	newBlock1.id = idCount;
	idCount += 1;

	newBlock2.classList.add('titleSavedNote');
	newBlock3.classList.add('contentSavedNode');
	
	// Кнопка удаления заметки
	delBtn.innerText = 'Удалить';

	// Имя для безымянных заметок
	if (mainForm.title.value === "") {
		if (nonamecount === 0) {
			newBlock2.innerText = 'Заметка';
			nonamecount += 1;
		} else {
			newBlock2.innerText = 'Заметка (' + nonamecount + ')'; 
			nonamecount += 1;
		}
	} else {
		newBlock2.innerText = mainForm.title.value;
	}
	newBlock3.innerText = mainForm.content.value;

	// Добавление блоков созраненных заметок
	yourNotes.append(newBlock1);
	newBlock1.append(newBlock2);
	newBlock1.append(newBlock3);
	newBlock1.append(delBtn);

	// Число записок и обнуление новой заметки
	count += 1;
	spanCount.innerHTML = "(" + count + ")";
	mainForm.title.value = "";
	mainForm.content.value = "";

	// Удаление класса active у формы для новой заметки
	mainForm.classList.remove('active');

	// Удаление  заметки
	delBtn.addEventListener('click', deleteNote);

	function deleteNote(event) {
		event.preventDefault();

		let conf = confirm('Удалить?')

		if (conf === true) {
				// id удаляемой заметки
			delId = delBtn.id

			deleteBlock = document.getElementById(delId)

			yourNotes.removeChild(deleteBlock)

			count -= 1;
			spanCount.innerHTML = count;
			if (count === 0) {
				yourNotes.classList.remove('activeNote');
			}
		}
		
	}
}

// Активация оформления текста
textBold.addEventListener('click', makeTextBold);
textItalic.addEventListener('click', makeTextItalic);

// Активация оформления текста
// Стиль Bold
function makeTextBold(event) {

	const list__title = document.querySelector('.list__title');
	const list__content = document.querySelector('.list__content');

	list__title.classList.toggle('bold');
	list__content.classList.toggle('bold');

	textBold.classList.toggle('actbg');
}

// Стиль Italic
function makeTextItalic(event) {

	const list__title = document.querySelector('.list__title');
	const list__content = document.querySelector('.list__content');

	list__title.classList.toggle('italic');
	list__content.classList.toggle('italic');

	textItalic.classList.toggle('actbg');
}

