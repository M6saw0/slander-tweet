import React from 'react'
import {Link, RouteComponentProps, withRouter} from 'react-router-dom'
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import "../css/header.css"

interface Props extends RouteComponentProps {}
interface LinkType {
    path: string,
    title: string
}


const HeaderNotwithRouter = ({match, history, location}:Props) => {
    const linkList: LinkType[] = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/diagnosis",
            title: "Diagnosis"
        },
        {
            path: "/change",
            title: "Change"
        },
        {
            path: "/slander",
            title: "Slander"
        },
        {
            path: "/be-slandered",
            title: "Be Slandered"
        },
        {
            path: "/report",
            title: "Report"
        },
        {
            path: "/ranking",
            title: "Ranking"
        }
    ]

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handlePush = (key: string) => {
        history.push(key)
    }
    const menuLinkList = linkList.map((linkData: LinkType) => (
        <MenuItem onClick={() => handlePush(linkData.path)}>{linkData.title}</MenuItem>
    ))


    const MenuLink = () => (
      <div className="menu-icon">
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuRoundedIcon fontSize="large" />
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {menuLinkList}
        </Menu>
      </div>
    )

    return (
        <header>
            <MenuLink/>
            <h1><Link className="header-title" to="/">誹謗中傷診断</Link></h1>
        </header>
    )
}


export const Header = withRouter(HeaderNotwithRouter)