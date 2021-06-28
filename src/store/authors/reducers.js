const initialState = {
    books: [
        {name:"Достоевский",date_of_birth:"22.05.1899"},
        {name:"Пушкин",date_of_birth:"20.01.1924"},
        {name:"Чехов",date_of_birth:"15.06.1956"},
        {name:"Толстой",date_of_birth:"11.12.1987"},
    ],
};

export const authorsReducer = (state=initialState,action) => {
    switch(action.type){
        // case
    }
    return state;
}