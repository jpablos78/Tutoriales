function onClickPromises() {

    let user = function (numero) {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                document.write('2');
                if (numero >= 0.5) {
                    resolve('ok');
                } else {
                    let error = new Error("Error de ejecución - 2 . . . :( ");
                    reject(error);
                }
            }, 3000);

        });

        return promise;
    }

    let user2 = () => {
        return new Promise(function (resolve, reject) {
            let error = Math.random() >= 0.5;
            document.write('3');
            if (error >= 0.5) {
                resolve('okis');
            } else {
                let error = new Error("Error de ejecución - 3 . . . :( ");
                reject(error);
            }
        });
    }

    document.write('1');
    console.log('1');
    user(Math.random())
        .then(function (respuesta) {
            console.log('2 ', respuesta);
            return user2();
        })
        .then(function (respuesta) {
            console.log('3', respuesta);
        })
        .catch(function (error) {
            console.log(error);
        });

    document.write('4');
    console.log('4');
}