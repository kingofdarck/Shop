function toggleAnswer1(element) {
    const answer = element.nextElementSibling;
    const icon = document.querySelector('.v156_21'); // Находим элемент с классом .v156_21

    if (!answer) {
        console.error('Ответ не найден. Проверьте структуру HTML.');
        return;
    }

    if (!icon) {
        console.error('Элемент с классом .v156_21 не найден.');
        return;
    }

    // Проверяем, скрыт ли элемент
    const computedStyle = window.getComputedStyle(answer);
    if (computedStyle.display === 'none') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(45deg)'; // Поворот иконки
    } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)'; // Возвращаем в исходное положение
    }
}

function toggleAnswer2(element) {
    const answer = element.nextElementSibling;
    const icon = document.querySelector('.v156_11'); // Находим элемент с классом .v156_21

    if (!answer) {
        console.error('Ответ не найден. Проверьте структуру HTML.');
        return;
    }

    if (!icon) {
        console.error('Элемент с классом .v156_11 не найден.');
        return;
    }

    // Проверяем, скрыт ли элемент
    const computedStyle = window.getComputedStyle(answer);
    if (computedStyle.display === 'none') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(45deg)'; // Поворот иконки
    } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)'; // Возвращаем в исходное положение
    }
}

function toggleAnswer3(element) {
    const answer = element.nextElementSibling;
    const icon = document.querySelector('.v156_19'); // Находим элемент с классом .v156_21

    if (!answer) {
        console.error('Ответ не найден. Проверьте структуру HTML.');
        return;
    }

    if (!icon) {
        console.error('Элемент с классом .v156_19 не найден.');
        return;
    }

    // Проверяем, скрыт ли элемент
    const computedStyle = window.getComputedStyle(answer);
    if (computedStyle.display === 'none') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(45deg)'; // Поворот иконки
    } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)'; // Возвращаем в исходное положение
    }
}

function toggleAnswer4(element) {
    const answer = element.nextElementSibling;
    const icon = document.querySelector('.v156_17'); // Находим элемент с классом .v156_21

    if (!answer) {
        console.error('Ответ не найден. Проверьте структуру HTML.');
        return;
    }

    if (!icon) {
        console.error('Элемент с классом .v156_17 не найден.');
        return;
    }

    // Проверяем, скрыт ли элемент
    const computedStyle = window.getComputedStyle(answer);
    if (computedStyle.display === 'none') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(45deg)'; // Поворот иконки
    } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)'; // Возвращаем в исходное положение
    }
}