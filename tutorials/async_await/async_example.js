// Option #1
// const { readFile, writeFile } = require('fs');

// const getText = (path) => {
//     return new Promise((res, rej) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 rej(error);
//             }
//             else {
//                 res(data);
//             }
//         })
//     })
// }

// // Then and catch for the promise
// getText("../content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// Option #2
// const { readFile, writeFile } = require('fs');

// const getText = (path) => {
//     return new Promise((res, rej) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 rej(error);
//             }
//             else {
//                 res(data);
//             }
//         })
//     })
// }

// const start = async function () {
//     let first = await getText("../content/first.txt")
//     console.log(first)
// }
// start("../content/first.txt")

// Option #3
const { readFile, writeFile } = require('fs').promises

const start = async () => {
    let first = await readFile("../content/first.txt", "utf-8")
    let second = await readFile("../content/second.txt", "utf-8")
    console.log(first)
    console.log(second)
    await writeFile("../content/new_file.txt", `This is new file ${first} ${second}`)
}
start("../content/first.txt")

