import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase";
import { InputAddMovie } from "../../Components/InputAddMovie";

export function Home() {
    const [films, setFilms] = useState<Array<[string, number]>>([]);


    const userDocRef = doc(db, "user", "nbarretoduarte@gmail.com");
    const getUser = getDoc(userDocRef)


    useEffect(() => {
        async function getMovies(userId: string) {
            const userDoc = await getUser;

            if (userDoc.exists()) {
                const movies = userDoc.data().movie;

                const movieCounts = movies.reduce((acc: Record<string, number>, movie: string) => {
                    const movieLower = movie.toLowerCase();
                    acc[movieLower] = (acc[movieLower] || 0) + 1;
                    return acc;
                }, {});

                setFilms(Object.entries(movieCounts));

            }
        }

        getMovies("nbarretoduarte@gmail.com");
    }, [films, getUser, userDocRef]);


    const addMovie = async (newMovie: any) => {
        try {
            const userDoc = await getUser;

            if (userDoc.exists()) {
                const movies = userDoc.data().movie || [];

                movies.push(newMovie.toLowerCase());

                await updateDoc(userDocRef, { movie: movies })
            }
        } catch (error) {
            console.log("Erro ao passar o filme: ", error)
        }
    };

    const removeMovie = async (movieToRemove: string) => {
        try {
            const userDoc = await getUser;

            if (userDoc.exists()) {
                const movies = userDoc.data().movie || [];
                console.log("Filmes antes da remoção:", movies);

                const index = movies.indexOf(movieToRemove);
                if (index !== -1) {
                    movies.splice(index, 1);
                    await updateDoc(userDocRef, { movie: movies });
                    console.log("Filme removido:", movieToRemove);
                } else {
                    console.log("Filme não encontrado:", movieToRemove);
                }
            }
        } catch (error) {
            console.log("Erro ao remover o filme:", error);
        }
    };





    return (
        <Container>
            <InputAddMovie addMovie={addMovie} />
            {films.map(([movie, count]) => (
                <button key={movie} onClick={() => removeMovie(movie.toLowerCase())}>
                    {movie.toUpperCase()}: {count} {count > 1 ? "vezes" : "vez"}
                </button>
            ))}
        </Container >
    );
}
