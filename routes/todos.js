const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markWorkingOn', todosController.markWorkingOn)

router.put('/markArchive', todosController.markArchive)

// router.put('/unmarkArchive', todosController.unmarkArchive)


router.put('/markComplete', todosController.markComplete)

router.put('/unmarkComplete', todosController.unmarkComplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router