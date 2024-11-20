
import { Link } from "react-router-dom"

export default function MyHoots ({myHoots}) {

  return (
    <main>
    {myHoots.map((myhoot) => (
      <Link key={myhoot._id} to={`/hoots/${myhoot._id}`}>
        <article>
          <header>
            <h2>{myhoot.title}</h2>
            <p>
              {myhoot.author.username} posted on
              {new Date(myhoot.createdAt).toLocaleDateString()}
            </p>
          </header>
          <p>{myhoot.text}</p>
        </article>
      </Link>
    ))}
  </main>
  )
}