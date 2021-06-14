import { FC } from "react"
import { Header } from "../../components"
import { Link } from "react-router-dom"
type Props = {
    title ?: string
}

const WelcomeScreen: FC<Props> = () => {
    return (
        <div>
            <Header title="Welcome" />
            Welcome Screen
            <Link to="/login" > Auth </Link>
        </div>
    )
}
export default WelcomeScreen;