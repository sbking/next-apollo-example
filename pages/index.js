import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import { initClient } from '../lib/initClient'
import { initStore } from '../lib/initStore'
import { withData } from 'next-apollo'

export default withData(class extends React.Component {
  static async getInitialProps (context) {
    return {
      headers: context.req ? context.req.headers : {},
      url: {
        query: context.query,
        pathname: context.pathname
      }
    }
  }

  static getApolloClient (props) {
    return initClient(props.headers)
  }

  static getReduxStore (client, props) {
    return initStore(client, props.initialState)
  }

  render () {
    return (
      <App>
        <Header pathname={this.props.url.pathname} />
        <Submit />
        <PostList />
      </App>
    )
  }
})
