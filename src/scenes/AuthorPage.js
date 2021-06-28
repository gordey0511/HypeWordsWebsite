import React, {useEffect} from "react";
import {AuthorAPI as AuthorApi} from "../services/AuthorApi";
import {LinesOfAuthorsBooks} from "../components/molecules/LinesOfAuthorsBooks";

export const AuthorPage = (props) => {
    const author=AuthorApi.getById(props.match.params.id)

    useEffect(() => {

    },[])

    return (
        <div style={styles.main}>
            <br/>
            <b style={styles.author_name}>
                {author.name}  {author.surname}<br/>
            </b>
            Дата рождения {author.date_birth}<br/>

            <b style={styles.author_name}>
                Книги
            </b>
            <LinesOfAuthorsBooks array={[{name:"Обломов"},{name:"Преступление и наказание"},{name:"Война и мир"}]}/>

        </div>
    )
}

const styles = {
    main:{
        display: 'block',
        position: 'relative',
        height: '100%',
        justifyContent: 'left',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: "20%",
        verticalAlign: 'center',
        marginTop: 20,
    },

    profile:{
        position: 'relative',
        marginTop: 100,
    },

    author_name:{
        fontSize: 40,
    }
}