import { initClient } from './initClient'
import { initStore } from './initStore'

export default (context, props) => {
  const headers = context && context.req ? context.req.headers : {}
  const client = initClient(props ? props.headers : headers)
  const store = initStore(client, props ? props.initialState : client.initialState)
  const url = context && { query: context.query, pathname: context.pathname }

  return { client, store, props: { headers, url } }
}
