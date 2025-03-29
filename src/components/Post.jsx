import { useState } from 'react';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment.jsx';
import { Avatar } from './Avatar.jsx';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');
  const isNewCommentEmpty = newCommentText.length === 0;
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  const handleDeleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  };
  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity('Esse campo é obrigatório');
  };
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/josefelipedev.png" />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            datetime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            value={newCommentText}
            name="comment"
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button disabled={isNewCommentEmpty} type="submit">
              Publicar
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                onDeleteComment={handleDeleteComment}
                key={comment.id}
                content={comment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
