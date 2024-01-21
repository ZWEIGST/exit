// Task 1 - Капризный назад - кнопка назад, которая срабатывает, только если в документе не менее трех полей ввода (input) с типом текст (атрибут type="text" или по умолчанию, без этого атрибута), у которых введен текст «пожалуйста».

const buttonBack = document.querySelector('.buttonBack');
const inputs = document.querySelectorAll('.input');
const please = 'пожалуйста';

buttonBack.addEventListener('click', () => {
    let counter = 0;
    for (const item of inputs) {
        if (item.value.toLowerCase() === please) {
            counter++;
        }
    }
    if (counter == 3) {
        history.back();
    }
    
});

// Task 2 - div, в котором в любом месте верстки при клике по нему он выдает точный путь по тегам до себя

const iKnow = document.querySelector('.iknowwhereyoulive');
const text = document.querySelector('.text');

iKnow.onclick = function () {
    const getParents = element => {
        const getTagName = (el) => el.localName;
    
        const arr = [getTagName(element)];
        let isEveryParentFound = false;
        let parent = element.parentNode;


        while (isEveryParentFound === false) {
            if (parent && getTagName(parent)) {
                arr.unshift(getTagName(parent));
                parent = parent.parentNode;
            } else {
                isEveryParentFound = true;
            }
        }
    
        return arr.join(' > ');

    };
    
    console.log(getParents(iKnow));
    text.textContent = (getParents(iKnow));

}