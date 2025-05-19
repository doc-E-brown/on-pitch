import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes'

export default [
  index('./routes/HomeRoute.tsx'),
  route('/welcome', './routes/WelcomeRoute.tsx'),
  ...prefix('team', [route('/:teamId?', './routes/team/TeamRoute.tsx')]),
  ...prefix('match', [
    index('./routes/match/ListMatchRoute.tsx'),
    route('/new', './routes/match/CreateNewMatchRoute.tsx'),
    route('/:matchId?', './routes/match/MatchRoute.tsx'),
  ]),
  route('*', 'NotFound.tsx'),
] satisfies RouteConfig
