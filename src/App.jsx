import { Post } from './components/Post.jsx';
import './global.css';
import { Header } from './components/Header.jsx';
import styles from './App.module.css';
import { Sidebar } from './components/SIdebar.jsx';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae."
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae."
          />
        </main>
      </div>
    </>
  );
}
