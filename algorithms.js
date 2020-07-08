function algorithm1() {
    let number = prompt('Введите число', '');
        if (number > 7) {
            alert('Привет');
        }
}
function algorithm2() {
    let name = prompt('Введите имя', '');
        if (name === 'Вячеслав') {
            alert('Привет, Вячеслав');
        } else {
            alert('Нет такого имени');
          }
}
function algorithm3() {    
    let arr = [1, 2, 3, 4, 9, 6, 7, 98, 24, 33, 99, 37, 55, 44, 39, 56];
    let arrMultiple = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 3 == 0){
                arrMultiple.push(arr[i]);
            }
        }
        alert('элементы массива кратные трём: ' + arrMultiple);
}
