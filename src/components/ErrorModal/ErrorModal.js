import styles from './ErrorModal.module.css'
import Card from '../UI/Card'
import Button from '../CreateUser/Button/Button'

const ErrorModal = ({ onCloseModal, modalKind }) => {
  const closeHandler = (e) => {
    e.preventDefault()
    onCloseModal('good')
  }

  return (
    <div className={styles.backdrop} onClick={closeHandler}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Некорректный {modalKind === 'nFail' ? 'ввод' : 'возраст'}</h2>
        </header>
        <section className={styles.content}>
          <p>
            {modalKind === 'nFail'
              ? 'Эти поля не могут быть пустыми'
              : 'Возраст должен быть больше 0'}
          </p>
        </section>
        <footer className={styles.actions}>
          <Button onClick={closeHandler}>Закрыть</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
