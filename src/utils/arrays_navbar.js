import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import FactCheckIcon from '@mui/icons-material/FactCheck';
import ListIcon from '@material-ui/icons/List';

export const profile_menu = {
    text: "Профиль",
    link: "/profile",
    icon: <AccountCircleIcon
        style={{
            height: 30,
            width: 30,
        }}
    />
}


export const check_essays_menu = {
    text: "Проверить сочинения",
    link: "/check_essays",
    icon: <EditIcon
        style={{
            height: 30,
            width: 30,
        }}
    />
}

export const new_lesson = {
    text: "Урок",
    link: "/create_topic",
    icon: <EditIcon
        style={{
            height: 30,
            width: 30,
        }}
    />
}

export const new_post = {
    text: "Пост",
    link: "/create_post",
    icon: <PostAddIcon
        style={{
            height: 30,
            width: 30,
        }}
    />
}


export const check_user_menu = () => {
    return {
        text: "Мои сочинения",
        link: "/user_essays/",
        icon: <ListIcon
            style={{
                height: 30,
                width: 30,
            }}
        />
    }
}
