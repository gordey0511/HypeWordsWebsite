import {ACTION_GET_DATA_OF_BOOK} from "../actions";

const initialState = {
    name: "test",
    author: null,
    link_of_author: null,
    date_of_publish: null,
    link_of_text: null,
    array_of_words: [],
    books: [
        {name:"Книга #1"},
        {name:"Книга #2"},
        {name:"Книга #3"},
        {name:"Книга #4"},
    ],
};

export const booksReducer = (state=initialState,action) => {
    switch(action.type){
        case ACTION_GET_DATA_OF_BOOK:
            //запрос к бд
            return {...state,
                name:'Евгений Онегин',
                author: 'Александр Пушкин',
                link_of_author:"/p/pushkin_a_s/",
                link_of_text:"/p/pushkin_a_s/text_0170.shtml",
                date_of_publish: "1830",
                array_of_words: [
                    {name:"Полина",cnt:15},
                    {name:"Лизочка",cnt:11},
                    {name:"Даша",cnt:5},
                    {name:"Ксяша",cnt:3},
                ],
            }
    }
    return state;
}