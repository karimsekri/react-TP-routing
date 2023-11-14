import { Link, useParams } from "react-router-dom"

const Home = () => {
    const params = useParams()

    return (
        <div>
            <h1>Hello  {params.login}</h1>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home