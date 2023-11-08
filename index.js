const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use('/users', require('./routs/user.router'))
app.use('/admin', require('./routs/admin.router'))
app.use('/books', require('./routs/book.router'))
app.use('/genres', require('./routs/genres.router'))
app.use('/reviews', require('./routs/reviews.router'))

mongoose.connect("mongodb+srv://Lalo:1234@cluster0.hpgfhyn.mongodb.net/", {
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
  console.log('Сервер запущен успешно http://localhost:4000')
})
