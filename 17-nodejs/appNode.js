// function c() {
//     console.log('c')
//     return
// }

function c() {
    setTimeout(() => {
        console.log('c')
    }, 2000)
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    b()
    console.log('a')
    return
}

a()
