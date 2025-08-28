import { useEffect, useState } from "react";
import { Alert, Container, Pagination } from "@mui/material";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";
import { InputAddMovie } from "../../Components/InputAddMovie";
import { Navigate } from "react-router-dom";
import { BoxPage } from "./style";
import CardMovie from "../../Components/CardMovie";

export function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [films, setFilms] = useState<Array<[string, number]>>([]);
    const [success, setSuccess] = useState("");

    const user = auth.currentUser;
    if (!user) {
        console.error("Usuário não autenticado");
        return <Navigate to="/login" />;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function getMovies(userId: string) {

            if (!user) {
                console.error("Usuário não autenticado");
                return <Navigate to="/login" />;
            }

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

        getMovies(user.uid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [films]);


    const addMovie = async (newMovie: any) => {
        try {
            const userDocRef = doc(db, "user", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const movies = userDoc.data().movie || [];

                movies.push(newMovie.toLowerCase());

                await updateDoc(userDocRef, { movie: movies })
                setSuccess("Filme adicionado com successo!");
                setTimeout(() => {
                    setSuccess("");
                }, 5000)
            } else {
                await setDoc(userDocRef, { movie: [newMovie.toLowerCase()] });
            }
        } catch (error) {
            console.log("Erro ao passar o filme: ", error)
        }
    };

    const removeMovie = async (movieToRemove: string) => {
        try {
            const userDocRef = doc(db, "user", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const movies = userDoc.data().movie || [];

                const index = movies.indexOf(movieToRemove);
                if (index !== -1) {
                    movies.splice(index, 1);
                    await updateDoc(userDocRef, { movie: movies });
                    console.log("Filme removido:", movieToRemove);
                }
                setSuccess("Filme deletado com successo!");
                    setTimeout(() => {
                        setSuccess("");
                    }, 5000)
            }
        } catch (error) {
            console.log("Erro ao remover o filme:", error);
        }
    };

    const moviesPerPage = 10;

    const totalPages = Math.ceil(films.length / moviesPerPage);

    const reversedFilms = films.slice().reverse();


    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = reversedFilms.slice(indexOfFirstMovie, indexOfLastMovie);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <Container>
            <InputAddMovie addMovie={addMovie} />
            {success && <Alert severity="success" sx={{margin: "25px 0", fontSize: "20px"}}>{success}</Alert>}
            {currentMovies.map(([movie, count]) => (
                <CardMovie key={movie} movie={movie} count={count} onDelete={() => removeMovie(movie.toLowerCase())} />
            ))}
            {films.length > moviesPerPage && (
                <BoxPage>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        size="large"
                        color="primary"
                    />
                </BoxPage>
            )}
        </Container >
    );
}
