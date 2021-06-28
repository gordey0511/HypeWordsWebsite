import React, {useState} from "react";

export const AuthorAPI = {
    authors: [
        {number:0,name:"Фёдор",surname:"Достоевский",date_birth:"11.11.1821"},
        {number:1,name:"Александр",surname:"Пушкин",date_birth:"06.06.1799"},
        {number:2,name:"Михаил",surname: "Лермонтов",date_birth:"15.10.1814"},
        {number:3,name:"Гордей",surname:"Завьялов",date_birth:"05.11.2004"}
        ],

    all: function (){
        return this.authors;
    },

    addAuthor: function ({name,surname,date_birth}){
        this.authors.push({number: this.authors.length,name:name,surname: surname,date_birth: date_birth})
    },

    getById: function (id){
        console.log(id)
        for(let i=0;i<this.authors.length;i++){
            if(this.authors[i].number===Number(id)){
                return this.authors[i];
            }
        }
    },

    getByName: function (name){
        for(let i=0;i<this.authors.length;i++){
            if(this.authors[i].surname===name){
                return this.authors[i].number;
            }
        }
    }

}
