import { Deploy } from 'pages/deploy'
import { Historic } from 'pages/historic'
import { DeployDetails } from 'components/deployDetails'
import { Login } from 'pages/login'
import { createBrowserRouter } from 'react-router-dom'
import Layout from 'styles/layout'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: (
      <Layout>
        <Historic />
      </Layout>
    )
  },
  {
    path: '/deploy',
    element: (
      <Layout>
        <Deploy />
      </Layout>
    )
  },
  {
    path: '/deploy/:id',
    element: (
      <Layout>
        <Deploy />
      </Layout>
    )
  },
  {
    path: '/historic/:id',
    element: (
      <Layout>
        <DeployDetails />
      </Layout>
    )
  },
  {
    path: '*',
    element: (
      <Layout>
        <div>errou a page amigão?</div>
      </Layout>
    )
  }
])

export { router }
