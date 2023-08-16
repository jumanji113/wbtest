window.addEventListener('DOMContentLoaded', function () {
    const checkbox1 = document.getElementById('checkbox1');
    const checkboxes = document.getElementsByClassName('checkbox');
    const modalTrigger = document.querySelectorAll('.change_img');
    const overlay = document.querySelector('.overlay');
    const modal1 = document.querySelector('.modal-buy');
    const modalbuyclose = document.querySelector('.modal__buy-close');
    const buttonSubmit = document.querySelector('.card__right-button');
    const checkboxtwo = document.querySelector('.checkbox-two');
    const sum = document.querySelector('.sum__all').textContent;

    //связь чекбокса и изменение текста кнопки

    checkboxtwo.addEventListener('change', function () {
        if (this.checked) {
            buttonSubmit.textContent = `Оплатить ${sum}`;
        } else {
            buttonSubmit.textContent = 'Заказать';
        }
    });

    //модальные окна

    modalTrigger.forEach((item) => {
        item.addEventListener('click', () => {
            overlay.classList.remove('hidden');
            modal1.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    modalbuyclose.addEventListener('click', () => {
        modal1.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    });

    //чекбоксы , и их состояния , функция при которой нажатие на 1 чекбокс меняет остальные состояния

    function toggleCheckboxes() {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = checkbox1.checked;
        }
    }

    checkbox1.addEventListener('click', () => {
        toggleCheckboxes();
    });

    //инпуты работа с вводами инпутов

    const inputs = document.querySelectorAll('.card__left-input');

    inputs.forEach((input) => {
        const label = input.previousElementSibling;
        const placeholder = input.getAttribute('placeholder');

        label.style.display = 'none';

        input.addEventListener('input', (event) => {
            const value = event.target.value;
            if (value) {
                label.textContent = placeholder;
                label.style.display = 'block';
            } else {
                label.style.display = 'none';
            }
        });

        input.addEventListener('blur', () => {
            const value = input.value;
            if (!value) {
                label.style.display = 'none';
            }
        });
    });
});
