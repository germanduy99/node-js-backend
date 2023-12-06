
const getHomePage = (req,res) => {
     //res.send('Hello World!')
     res.render('sample')
}

const getABC = (req,res) => {
    res.send('Check abc');
}

const getName = (req,res) => {
    res.send('<h1>le duc duy</h1>')
}

module.exports = {
    getHomePage,
    getABC,
    getName
};