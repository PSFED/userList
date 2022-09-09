import { useState } from 'react'
import UserList from './components/UserList/UserList'
import CreateUser from './components/CreateUser/CreateUser'
import ErrorModal from './components/ErrorModal/ErrorModal'

const INITIAL_LIST = [
  { name: 'Pavel', age: 28, id: '2' },
  { name: 'John', age: 19, id: '1' },
]
const App = () => {
  const [users, setUsers] = useState(INITIAL_LIST)
  const [error, setError] = useState('good')

  const createUserHandler = (person) => {
    setUsers((prevList) => {
      return [person, ...prevList]
    })
  }

  const errorHandler = (close) => {
    setError(close)
  }

  return (
    <div>
      <div>
        <CreateUser isModal={errorHandler} onCreateUser={createUserHandler} />
        <UserList users={users} />
      </div>

      {error !== 'good' && (
        <ErrorModal modalKind={error} onCloseModal={errorHandler} />
      )}
    </div>
  )
}

export default App
