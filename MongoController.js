const MongoModel = require('./MongoModel');

module.exports.getMeal = async (req, res) => {
    const myModel = await MongoModel.find();
    res.send(myModel)
}

module.exports.saveMeal = async (req, res) => {
    const { name } = req.body;
    MongoModel.create({ name })
    .then((data) => {
        res.send(data)
    })
}

module.exports.deleatMeal = async (req, res) => {
    const { _id } = req.body;
    MongoModel.findByIdAndDelete(_id)
    .then(() => res.send('Всё успешно удалено'));
}

module.exports.putMeal = async (req, res) => {
    const { _id, name } = req.body;
    MongoModel.findByIdAndUpdate(_id, { name })
    .then(() => res.send('Данные успешно изменены'))
}