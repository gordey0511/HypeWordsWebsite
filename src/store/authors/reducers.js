import {ACTION_GET_DATA_OF_AUTHOR} from "../actions";

const initialState = {
    name : "Test Test Test",
    profile: null,
    date_of_birth: null,
    date_of_death: null,
    link_of_author: null,
    array_of_words: null,
    books: [
        {name:"Пушкин",date_of_birth:"20.01.1924"},
        {name:"Чехов",date_of_birth:"15.06.1956"},
        {name:"Толстой",date_of_birth:"11.12.1987"},
    ],
    authors: [
        {name:"Автор#1"},
        {name:"Автор#2"},
        {name:"Автор#3"},
        {name:"Автор#4"},
        {name:"Автор#5"},
    ]
};

export const authorsReducer = (state=initialState,action) => {
    switch(action.type){
        // case
        case ACTION_GET_DATA_OF_AUTHOR:
            return {...state,
                name: "Никульшин Павел Андреевич",
                profile: "/profile.png",
                link_of_author: "/p/pushkin_a_s/",
                date_of_birth: "2004",
                date_of_death: "2222",
                array_of_words: {
                    "Полина": 15,
                    "Лизочка": 13,
                    "Даша": 10,
                    "Ксяша": 5,
                },
                books: [
                    {name:"Хрендяблик",date_of_birth:"20.01.1924"},
                    {name:"Хрендяблик",date_of_birth:"15.06.1956"},
                    {name:"Хрендяблик",date_of_birth:"11.12.1987"},
                ],
            }
    }
    return state;
}