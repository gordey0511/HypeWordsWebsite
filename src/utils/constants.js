import {useState} from "react";

export const BASE_URL = "http://127.0.0.1:8000"
export const NAVBAR_TITLE = {
    Home: "HypeWords",
    Books: "Книги",
    Authors: "Авторы",
    Analyze: "Анализировать",
    Login: "Войти",
    Sign_up: "Зарегистрироваться",
    Log_up: "Выйти",
    Profile:"Профиль",
}

export const COLORS = {
    red: '#de6161',
    blue: '#2657eb',
}

export const LINES = {
    authors: 1,
    books: 2,
}

export const TYPES_OF_BOOKS = {
    Proza: "Проза",
    Poesia: "Поэзия",
    Dramaturgia: "Драматургия",
    Perevodi: "Переводы",
    Skazki: "Сказки",
    Detskaya: "Детская",
    Memuari: "Мемуары",
    History: "История",
    Publicistika: "Публицистика",
    Kritika: "Критика",
    Philosophy: "Философия",
    Religion: "Религия",
    Politics: "Политика",
    Hist_Proza: "Историческая проза",
    Biog_Proza: "Биографическая проза",
    Hum_and_sut: "Юмор И сатира",
    Trips: "Путешествия",
    Prevovedenie: "Правоведение",
    Ethnography: "Этнография",
    Adventures: "Приключения",
    Pedagogika: "Педагогика",
    Psychology: "Психология",
    Geography: "География",
    Reference: "Справочная",
    Anthropology: "Антропология",
    Philology: "Филология",
    Zoology: "Зоология",
    Epistolary: "Эпистолярий",
    Botanics: "Ботаника",
    Phantasy: "Фантастика",
    Polit_economy: "Политэкономия",
}

export const TYPES_OF_AUTHORS = {
    Rus_20: "Русская литература XX в.",
    Rus_19: "Русская литература XIX в.",
    Old_Rus: "Древнерусская литература",
    English: "Английская литература",
    German: "Немецкая литература",
    American: "Американская литература",
    French: "Французская литература",
    Special: "Специальные разделы"
}