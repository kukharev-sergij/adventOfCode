const data = require('./task-2019-02.json');

class Storage extends Array {
    constructor(...data) {
        super()
        this.push(...data);
    }

    get walk () {
        const that = this;
        return (function *() {
            for (let i=0; true; i++) {
                const [ command, a, b, c ] = that.slice(4*i, 4*(i+1));
                if ([1, 2, 3].includes(command)) {
                    yield [ command, a, b, c ];
                } else if ([99].includes(command)) {
                    break;
                } else {
                    break;
                }
            }                
        })();
    }
}

const storage = new Storage(1, 2, 3, 4);
const walk = storage.walk;
console.log(walk.next())
console.log(walk.next())

// const index = (data, id = 0, offset = 0) = data[4*id + offset];
// const value = (data, index = 0) = data

// const calc = (data, i) => {
//     const [command, indexA, indexB, indexResult] = data.slice(4*i, 4*(i+1));
//     const a = data[indexA];
//     const b = data[indexB];
//     const calc = ;
//     return { command, indexA, indexB, indexResult };
// }
// console.log({data});
// console.log({calc: calc(data, 0)});

