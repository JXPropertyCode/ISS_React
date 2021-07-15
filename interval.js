function outHi() {
    console.log("Hi")
}

let sayHi = setInterval(() => outHi(), 2000)

// clearInterval(sayHi)

setTimeout(() => clearInterval(sayHi), 10000)