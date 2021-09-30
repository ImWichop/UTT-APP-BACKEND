import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout')

Route.group(() => {
  Route.resource('providers', 'ProvidersController')
  Route.resource('statuses', 'StatusesController')
  Route.resource('areas', 'AreasController')
  Route.resource('roles', 'RolesController')
  Route.resource('users', 'UsersController')

  Route.resource('orders', 'OrdersController')
  Route.get('orders/with/quiz', 'OrdersController.withQuiz')
  Route.get('orders/without/quiz', 'OrdersController.withOutQuiz')

  Route.resource('quizzes', 'QuizzesController')
  Route.resource('results', 'ResultsController')
}).prefix('api/v1')
