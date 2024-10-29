import { useForm } from "react-hook-form";
import { ButtonAdd, InputAdd } from "./style";

export function InputAddMovie({ addMovie }: { addMovie: (newMovie: string) => void }) {
    const { handleSubmit, register } = useForm();

    const onSubmit = (data: any) => {
        addMovie(data.movie)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputAdd
                label="Qual foi o filme que você assistiu?"
                variant="outlined"
                {...register("movie")}
            />
            <ButtonAdd type="submit">Adicionar</ButtonAdd>
        </form>
    )
}