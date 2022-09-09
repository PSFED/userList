import { useState } from 'react'
import Button from './Button/Button'
import Card from '../UI/Card'
import styles from './CreateUser.module.css'

const CreateUser = ({ onCreateUser, isModal }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const addPersonHandler = (e) => {
    e.preventDefault()
    if ((name.trim().length === 0 && !age) || (!name && age > 0)) {
      isModal('nFail')
      return
    } else if (age <= 0) {
      isModal('aFail')
      return
    } else {
      const inputRes = { name, age, id: Math.random().toString() }
      onCreateUser(inputRes)

      setName('')
      setAge('')
    }
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const createUserHandler = (e) => {
    setAge(e.target.value)
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addPersonHandler}>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Возраст</label>
        <input
          id="age"
          value={age}
          type="number"
          onChange={createUserHandler}
        />
        <Button type={'submit'}>Добавить Пользователя</Button>
      </form>
    </Card>
  )
}

export default CreateUser
