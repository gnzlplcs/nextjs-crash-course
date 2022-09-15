import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout