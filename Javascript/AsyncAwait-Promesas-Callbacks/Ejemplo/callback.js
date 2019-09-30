function onClickCallback() {
    console.log('en callback');
    //para que se ejecute en el orden 1-2-3
    //4 se ejecuta fuera de orden porque javascript es asincronico
    console.log('1');
    document.write('1');
    callback();
    document.write('4');
    console.log('4');
    callback2();

}






// function ejemplo1(fn) {
//     fn();
// }

// ejemplo1(function () {
//     console.log("hola");
// });  // "hola"

function callback() {

    findId(1, function () {
        document.write('3');
        console.log('3');
    })


}

function findId(numero, fn) {
    setTimeout(() => {
        document.write('2');
        console.log('2');
        fn();
    }, 3000);
}

//callback con parametros

function callback2() {
    findParameters(1, function (response, error) {
        if (error) {
            document.write('6 con error');
            console.log('6 con error');

        } else {
            document.write('6 ' + response);
            console.log('6 ' + response);
        }
    })
}

function findParameters(numero, fn) {
    setTimeout(() => {
        document.write('5');
        console.log('5');

        let error = Math.random() >= 0.5;
        let response = 'hola';

        fn(response, error);
    }, 3000);
}