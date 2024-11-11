import { useState } from "react";
import { BoxSearch, Input, Text } from "./style";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import { CardMovie } from "../../../CardMovie";

export function InputSearch() {
    const [searchResult, setSearchResult] = useState<[string, number][] | null>(null);

    const [searchTerm, setSearchTerm] = useState('');

    const user = auth.currentUser;
    if (!user) {
        console.error("Usuário não autenticado");
        return <Navigate to="/login" />;
    }

    const userEmail = user.email ?? "";

    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value)
        searchMovie(e.target.value)
    }

    const userDocRef = doc(db, "user", userEmail);

    const searchMovie = async (movieToSearch: string) => {
        try {
            const userDoc = await getDoc(userDocRef);

            if (movieToSearch === "") {
                setSearchResult([])
            } else {
                if (userDoc.exists()) {
                    const movies = userDoc.data().movie || [];

                    const movieCounts = movies.reduce((acc: Record<string, number>, movie: string) => {
                        const movieLower = movie.toLowerCase();
                        if (movieLower.includes(movieToSearch.toLowerCase())) {
                            acc[movieLower] = (acc[movieLower] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    const matchingMovies = Object.entries(movieCounts) as [string, number][];
                    setSearchResult(matchingMovies.length > 0 ? matchingMovies : []);
                }
            }
        } catch (error) {
            console.log("Erro ao buscar o filme:", error);
            setSearchResult([]);
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
        <BoxSearch>
            <Text>Pesquisar filme que você já assistiu:</Text>
            <Input
                fullWidth
                autoComplete="off"
                type="text"
                label="Buscar filme"
                variant="filled"
                value={searchTerm}
                onChange={handleSearch}
            />
            <>
                {searchTerm && searchResult && searchResult.length >= 0 ? (
                    searchResult.map(([movie, count], index) => (
                        <CardMovie key={index} movie={movie} count={count} handleDelete={() => removeMovie(movie.toLowerCase())} />
                    ))
                ) : null}
            </>
        </BoxSearch>
    )
}