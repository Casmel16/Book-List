import React from 'react';
import ReadPanes from '../../Components/ReadPanes';
import AddBookLi from '../../Components/AddBookLi';
const paneData = [
    {
        "title": "The Final Empire",
        "author": "Brandon Sanderson",
        "year": 2006,
        "pages": 541,
        "start_date": "2020-05-10",
        "end_date": "2020-05-25",
        "rating": 4.7,
        "current_page": null,
        "status": "Read"
    },
    {
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "year": 1967,
        "pages": 417,
        "start_date": "2021-03-15",
        "end_date": "2021-03-30",
        "rating": 4.9,
        "current_page": null,
        "status": "Read"
    },
    {
        "title": "La Oculta",
        "author": "Héctor Abad Faciolince",
        "year": 1987,
        "pages": 180,
        "start_date": null,
        "end_date": null,
        "rating": null,
        "current_page": null,
        "status": "To Read"
    },
    {
        "title": "Murder on the Orient Express",
        "author": "Agatha Christie",
        "year": 1934,
        "pages": 265,
        "start_date": "2021-12-01",
        "end_date": null,
        "rating": null,
        "current_page": 150,
        "status": "Reading"
    },
    {
        "title": "Animal Farm",
        "author": "George Orwell",
        "year": 1945,
        "pages": 112,
        "start_date": null,
        "end_date": null,
        "rating": 1.6,
        "current_page": null,
        "status": "Read"
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "year": 1953,
        "pages": 158,
        "start_date": null,
        "current_page": 145,
        "status": "Reading"
    },
    {
        "title": "La Tregua",
        "author": "Mario Benedetti",
        "year": 1960,
        "pages": 216,
        "start_date": null,
        "end_date": null,
        "rating": null,
        "current_page": null,
        "status": "To Read"
    },
    {
        "title": "The Art of Reading",
        "author": "Nuccio Ordine",
        "year": 2010,
        "pages": 184,
        "start_date": "2021-09-15",
        "end_date": null,
        "rating": null,
        "current_page": 100,
        "status": "Reading"
    },
    {
        "title": "The Unbearable Lightness of Being",
        "author": "Milan Kundera",
        "year": 1984,
        "pages": 314,
        "start_date": null,
        "end_date": null,
        "current_page": null,
        "status": "To Read"
    },
    {
        "title": "The Way of Kings",
        "author": "Brandon Sanderson",
        "year": 2010,
        "pages": 1007,
        "current_page": null,
        "status": "To Read"
    },
    {
        "title": "Chronicle of a Death Foretold",
        "author": "Gabriel García Márquez",
        "year": 1981,
        "pages": 120,
        "start_date": null,
        "end_date": null,
        "rating": 4.8,
        "current_page": null,
        "status": "Read"
    },
    {
        "title": "El Amor en los Tiempos del Cólera",
        "author": "Gabriel García Márquez",
        "year": 1985,
        "pages": 368,
        "start_date": null,
        "end_date": null,
        "rating": 3.4,
        "current_page": null,
        "status": "Read"
    },
    {
        "title": "Oblivion",
        "author": "Héctor Abad Faciolince",
        "year": 2006,
        "pages": 312,
        "start_date": null,
        "end_date": null,
        "rating": null,
        "current_page": null,
        "status": "To Read"
    },
    {
        "title": "The Agony of Eros",
        "author": "Nuccio Ordine",
        "year": 2013,
        "pages": 176,
        "start_date": "2021-05-20",
        "end_date": null,
        "rating": null,
        "current_page": 80,
        "status": "Reading"
    },
    {
        "title": "The Book of Laughter and Forgetting",
        "author": "Milan Kundera",
        "year": 1979,
        "pages": 313,
        "start_date": null,
        "end_date": null,
        "rating": null,
        "current_page": 105,
        "status": "Reading"
    }
];
function Home() {
  return (
    <>
        <AddBookLi/>
        <ReadPanes bookData={[]}/>
    </>
  );
}

export default Home;