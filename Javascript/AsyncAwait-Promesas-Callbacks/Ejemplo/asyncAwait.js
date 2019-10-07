//import { promisify } from 'util';
//const sleep = promisify(setTimeout);

async function onClickAsyncAwait() {
    try {
        console.time('Measuring time');

        const valueOne = await taskOne();
        const valueTwo = await taskTwo();
        const valueThree = await taskThree();

        console.timeEnd('Measuring time');
    } catch (error) {
        //console.log(error);
    }

}

async function taskOne() {
    try {
        let error = await fnc();
        if (error < 0.5) {
            throw Error('SOME PROBLEM');
        }
        console.log('Task One');
    } catch (error) {
        console.log('Task One: ', error);
    }

}

async function taskTwo() {
    try {
        let error = await fnc();
        if (error < 0.5) {
            throw Error('SOME PROBLEM');
        }
        console.log('Task Two');
    } catch (error) {
        console.log('Task Two: ', error);
    }

}

async function taskThree() {
    try {
        let error = await fnc();
        if (error < 0.5) {
            throw Error('SOME PROBLEM');
        }
        console.log('Task Three');
    } catch (error) {
        console.log('Task Three: ', error);
    }


    //await four();
    //await setTimeout(function () {
    //    console.log('Task Three');
    //}, 1000)
}


async function fnc() {
    //return error = Math.random() >= 0.5;
    //alert('x');

    new Promise(resolve => {
        setTimeout(resolve, 4000);
      });

    //await (setTimeout( function () {
    //     console.log('Task Three');
    //}, 4000))
}
