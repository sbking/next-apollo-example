import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import { withData } from 'next-apollo'
import apolloFactory from '../lib/apolloFactory'

export default withData(apolloFactory, (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <Submit />
    <PostList />
  </App>
))
