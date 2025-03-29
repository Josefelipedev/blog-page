import { Post } from './components/Post.jsx';
import './global.css';
import { Header } from './components/Header.jsx';
import styles from './App.module.css';
import { Sidebar } from './components/SIdebar.jsx';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/josefelipedev.png',
      name: 'Jose Felipe',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa primeiro post 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-11 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/josefelipedev.png',
      name: 'Felipe',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-10 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
