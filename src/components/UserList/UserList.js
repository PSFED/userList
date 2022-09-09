import declination from '../utils/declination'
import styles from './UserList.module.css'
import Card from '../UI/Card'

const UserList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={Math.random().toString()}>
            {user.name} - {user.age} {declination(user.age)}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
