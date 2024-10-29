import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { InputAddMovie } from "../../Components/InputAddMovie";

export function Home() {
    const [films, setFilms] = useState<Array<[string, number]>>([])

    useEffect(() => {
        async function getMovies(userId: string) {
            const userDocRef = doc(db, "user", userId);

            const userDoc = await getDoc(userDocRef);

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
    }, [films]);


    const addMovie = async (newMovie: any) => {
        try {
            const userDocRef = doc(db, "user", "nbarretoduarte@gmail.com");
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const movies = userDoc.data().movie || [];

                movies.push(newMovie);

                await updateDoc(userDocRef, { movie: movies })
            }
        } catch (error) {
            console.log("Erro ao passar o filme: ", error)
        }
    };

    return (
        <Container>
            {films.map(([movie, count]) => (
                <li key={movie}>
                    {movie.toUpperCase()}: {count} {count > 1 ? "vezes" : "vez"}
                </li>
            ))}
            <InputAddMovie addMovie={addMovie} />
        </Container>
    )
}
