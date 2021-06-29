import {ACTION_GET_DATA_OF_BOOK} from "../actions";

const initialState = {
    name: "test",
    author: null,
    link_of_author: null,
    date_of_publish: null,
    link_of_text: null,
    array_of_words: null,
    books: [
        {name:"Книга #1"},
        {name:"Книга #2"},
        {name:"Книга #3"},
        {name:"Книга #4"},
    ],
};

export const booksReducer = (state=initialState,action) => {
    console.log("REDUCER GETBOOKS "+action.type)
    switch(action.type){
        case ACTION_GET_DATA_OF_BOOK:
            //запрос к бд
            return {...state,
                name:'Евгений Онегин',
                author: 'Александр Пушкин',
                link_of_author:"/p/pushkin_a_s/",
                link_of_text:"/p/pushkin_a_s/text_0170.shtml",
                date_of_publish: "1830",
                array_of_words: {
                    "Полина": 15,
                    "Лизочка": 13,
                    "Даша": 10,
                    "Ксяша": 5,
                },
            }
    }
    return state;
}