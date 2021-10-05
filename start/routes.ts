import Route from '@ioc:Adonis/Core/Route'

Route.post('login', 'AuthController.login')
Route.post('logout', 'AuthController.logout').middleware(['auth:api'])

Route.group(() => {
  Route.resource('providers', 'ProvidersController')
  Route.resource('statuses', 'StatusesController')
  Route.resource('areas', 'AreasController')
  Route.resource('roles', 'RolesController')
  Route.resource('users', 'UsersController')
  Route.resource('scores', 'ScoresController')

  Route.resource('orders', 'OrdersController')
  Route.get('orders/with/quiz', 'OrdersController.withQuiz')
  Route.get('orders/without/quiz', 'OrdersController.withOutQuiz')

  Route.resource('quizzes', 'QuizzesController')
  Route.get('quizzes/by/area', 'QuizzesController.byArea')
  Route.resource('results', 'ResultsController')
  Route.post('results/reEvaluate', 'ResultsController.reEvaluate')
})
  .prefix('api/v1')
  .middleware(['auth:api'])
