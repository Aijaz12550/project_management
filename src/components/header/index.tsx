import { AppBar, Toolbar } from "@material-ui/core";
import { FC, memo } from "react"

type Props = {
    title: string
}
const Header: FC<Props> = (props) => {
    let { title } = props
    return (
        <AppBar position="static" color="secondary" >
           <Toolbar>
               {title}
           </Toolbar>
        </AppBar>
    )
}

export default memo(Header);