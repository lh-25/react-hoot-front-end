import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { AuthedUserContext } from "../../App"
import * as hootService from '../../services/hootService'
import CommentForm from '../CommentForm/CommentForm'

export default function HootDetails({handleDeleteHoot}) {
  const { hootId } = useParams()
  const [hoot, setHoot] = useState(null)
  const user =useContext(AuthedUserContext)

  useEffect(() => {
    const getHoot = async () => {
      const hootData = await hootService.show(hootId)
      setHoot(hootData)
    }
    getHoot()
  }, [hootId])

  const handleAddComment = async (commentFormData) => {
    const newComment = await hootService.createComment(hootId, commentFormData)
    setHoot({ ...hoot, comments: [...hoot.comments, newComment] })
  }



  if (!hoot) return <main>Loading...</main>
  return (
    <main>
      <header>
        <p>{hoot.category.toUpperCase()}</p>
        <h1>{hoot.title}</h1>
        <p>
          {hoot.author.username} posted on
          {new Date(hoot.createdAt).toLocaleDateString()}
        </p>
        {hoot.author._id === user._id && (
                <>
                <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
                <button onClick={() => handleDeleteHoot(hootId)}>Delete</button>
                </>
              )}
      </header>
      <p>{hoot.text}</p>
      <section>
        <h2>Comments</h2>
        {!hoot.comments.length && <p>There are no comments</p>}

        {hoot.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {comment.author.username} posted on
                {new Date(hoot.createdAt).toLocaleDateString()}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
        <h2>Comments</h2>
        <CommentForm handleAddComment={handleAddComment} />
      </section>
    </main>
  )
}