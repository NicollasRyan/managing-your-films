import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";
import { InputAddMovie } from "../../Components/InputAddMovie";
import { Navigate } from "react-router-dom";

export function Home() {
    const [films, setFilms] = useState<Array<[string, number]>>([]);

    const user = auth.currentUser;
    if (!user) {
        console.error("Usuário não autenticado");
        return <Navigate to="/login" />;
    }

    const userEmail = user.email ?? "";
    console.log("=>", userEmail)

    const userDocRef = doc(db, "user", userEmail);
    const getUser = getDoc(userDocRef)




    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function getMovies(userId: string) {

            if (!userEmail) {
                console.error("Usuário não autenticado");
                return <Navigate to="/login" />;
            }

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

        getMovies(userEmail);
    }, [films, getUser, userDocRef, userEmail]);


    const addMovie = async (newMovie: any) => {
        try {
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const movies = userDoc.data().movie || [];

                movies.push(newMovie.toLowerCase());

                await updateDoc(userDocRef, { movie: movies })
                console.log(movies)
            } else {
                await setDoc(userDocRef, { movie: [newMovie.toLowerCase()] });
                console.log("Documento criado e filme adicionado:", [newMovie.toLowerCase()]);
            }
        } catch (error) {
            console.log("Erro ao passar o filme: ", error)
        }
    };

    const removeMovie = async (movieToRemove: string) => {
        try {
            const userDoc = await getDoc(userDocRef);

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
