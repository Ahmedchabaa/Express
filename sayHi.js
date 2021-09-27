const sayHi =(req , res , next) => {
    Console.log('Hello')
    next()
}

module.exports = sayHi