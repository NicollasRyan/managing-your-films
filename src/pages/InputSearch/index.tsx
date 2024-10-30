import { useState } from "react";
import { BoxSearch, Input, Result } from "./style";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export function InputSearch() {
    const [searchResult, setSearchResult] = useState<[string, number][] | null>(null);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value)
        searchMovie(e.target.value)
    }

    const searchMovie = async (movieToSearch: string) => {
        try {
            const userDocRef = doc(db, "user", "nbarretoduarte@gmail.com");
            const userDoc = await getDoc(userDocRef);

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
        } catch (error) {
            console.log("Erro ao buscar o filme:", error);
            setSearchResult([]);
        }
    };

    return (
        <BoxSearch>
            <Input type="text"
                value={searchTerm}
                onChange={handleSearch}
            />
            <Result>{searchResult && searchResult.length > 0 ? (
                searchResult.map(([movie, count], index) => (
                    <div key={index}>
                        {movie} (Quantidade: {count})
                    </div>
                ))
            ) : (
                <p>Nenhum filme encontrado</p>
            )}
            </Result>
        </BoxSearch>
    )
}