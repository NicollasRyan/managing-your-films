import { Container } from "@mui/material";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export function Home() {

    useEffect(() => {
        getMovies("nbarretoduarte@gmail.com");
    }, [])

    async function getMovies(userId: string) {
        try {
            // Referência ao documento do usuário no Firestore
            const userDocRef = doc(db, "user", userId);

            // Obtenha o documento
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                // Acessa o campo "movie"
                const movies = userDoc.data().movie;
                console.log("Movies:", movies);
                return movies;
            } else {
                console.log("Documento não encontrado.");
            }
        } catch (error) {
            console.error("Erro ao acessar os movies:", error);
        }
    }


    return (
        <Container></Container>
    )
}
