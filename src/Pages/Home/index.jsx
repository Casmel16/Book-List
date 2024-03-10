import React from 'react';
import ReadPanes from '../../Components/ReadPanes';
import AddBookLi from '../../Components/AddBookLi';
const paneData = {
    "Read": [
        {
            "title": "Mistborn: The Final Empire",
            "author": "Brandon Sanderson",
            "year": 2006,
            "pages": 541,
            "start_date": "2020-05-10",
            "end_date": "2020-05-25",
            "rating": 4.7,
        },
        {
            "title": "The Way Of Kings",
            "author": "Brandon Sanderson",
            "year": 2010,
            "pages": 1189,
            "start_date": "2021-03-15",
            "end_date": "2021-03-30",
            "rating": 5,
        },

        {
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "year": 1813,
            "pages": 279,
            "start_date": "2019-09-01",
            "end_date": "2019-09-15",
            "rating": 4.7,
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "year": 1949,
            "pages": 328,
            "start_date": "2017-11-10",
            "end_date": "2017-12-05",
            "rating": 4.6,
        },
        {
            "title": "Words of Radiance",
            "author": "Brandon Sanderson",
            "year": 2014,
            "pages": 1087,
            "start_date": "2018-06-20",
            "end_date": "2018-07-25",
            "rating": 4.9,
        },
    ],
    "Reading": [
        {
            "title": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "year": 1937,
            "pages": 310,
            "start_date": "2022-02-01",
            "current_page": 150,
        },
        {
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "year": 1988,
            "pages": 197,
            "start_date": "2022-01-10",
            "current_page": 100,
        },
        {
            "title": "Sapiens: A Brief History of Humankind",
            "author": "Yuval Noah Harari",
            "year": 2011,
            "pages": 443,
            "start_date": "2021-10-05",
            "current_page": 220,
        },
        {
            "title": "The Da Vinci Code",
            "author": "Dan Brown",
            "year": 2003,
            "pages": 489,
            "start_date": "2021-07-20",
            "current_page": 300,
        },
        {
            "title": "The Girl with the Dragon Tattoo",
            "author": "Stieg Larsson",
            "year": 2005,
            "pages": 672,
            "start_date": "2021-05-15",
            "current_page": 400,
        },
    ],
    "To Read": [
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "year": 1960,
            "pages": 281,
        },
        {
            "title": "The Lord of the Rings",
            "author": "J.R.R. Tolkien",
            "year": 1954,
            "pages": 1178,
        },
        {
            "title": "Dune",
            "author": "Frank Herbert",
            "year": 1965,
            "pages": 604,
        },
        {
            "title": "The Chronicles of Narnia",
            "author": "C.S. Lewis",
            "year": 1950,
            "pages": 767,
        },
        {
            "title": "The Hitchhiker's Guide to the Galaxy",
            "author": "Douglas Adams",
            "year": 1979,
            "pages": 193,
        },
        {
            "title": "The Road",
            "author": "Cormac McCarthy",
            "year": 2006,
            "pages": 287,
        },
    ],
};
function Home() {
  return (
    <>
        <AddBookLi/>
        <ReadPanes paneData={paneData}/>
    </>
  );
}

export default Home;