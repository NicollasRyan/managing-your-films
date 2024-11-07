import { useEffect, useState } from "react";
import { Container, Pagination } from "@mui/material";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";
import { InputAddMovie } from "../../Components/InputAddMovie";
import { Navigate } from "react-router-dom";
import { CardMovie } from "../../Components/CardMovie";
import { BoxPage } from "./style";

export function Home() {
    const [currentPage, setCurrentPage] = useState(1);
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
                console.log(movies);
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
            {currentMovies.map(([movie, count]) => (
                <CardMovie key={movie} movie={movie} count={count} handleDelete={() => removeMovie(movie.toLowerCase())} />
            ))}
            {films.length > moviesPerPage && (
                <BoxPage>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        size="large"
                        color="secondary"
                    />
                </BoxPage>
            )}
        </Container >
    );
}
