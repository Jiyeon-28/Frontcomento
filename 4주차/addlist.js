// bottom class에서 작성한 텍스트를 section1 클래스에 추가

const addButton = document.querySelector('.addbutton');
const inputField = document.querySelector('.input-field');
const list = document.querySelector('.list');
const checkboxContainer = document.querySelector('.section2');

let listCount = 0;
listMax = 10;

addButton.addEventListener('click', ()=> {
    const inputValue = inputField.value.trim();

    if (listCount >= listMax){
        alert("10개까지 만들 수 있습니다.");
        return;
    }

    if (inputValue) {
        const listItem = document.createElement('li');
        listItem.textContent = `${inputValue}`;

        
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'checkbox';

        checkBox.addEventListener('click', () => {
            if (checkBox.checked) {
                listItem.style.textDecoration = 'line-through'; 
                list.appendChild(listItem);  
                checkboxContainer.appendChild(checkBox); 
            } else {
                listItem.style.textDecoration = 'none'; 
                list.appendChild(listItem); 
                checkboxContainer.appendChild(checkBox);  
            }
        });

        list.appendChild(listItem);
        checkboxContainer.appendChild(checkBox);


        inputField.value = '';
        listCount++;
    }
    else {
        alert('내용을 입력하세요!');
    }
});


inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});