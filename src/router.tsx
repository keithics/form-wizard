import ErrorPage from 'pages/errors/Error';
import InvalidAge from 'pages/InvalidAge';
import Root from 'pages/Root';
import Start from 'pages/Start';
import Summary from 'pages/Summary';
import Welcome from 'pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/start',
        element: <Start />,
      },
      {
        path: '/summary',
        element: <Summary />,
      },
      {
        path: '/invalid-age',
        element: <InvalidAge />,
      },
    ],
  },
]);
