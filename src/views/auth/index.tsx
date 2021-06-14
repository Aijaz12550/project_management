import { FC } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components"
type Props = {
    title ?: string
}

const Auth: FC<Props> = () => {
    return (
        <div>
            <Header title="Login" />
            Welcome Screen
            <Link to="/welcome"  > Welcome</Link>
        </div>
    )
}
export default Auth;