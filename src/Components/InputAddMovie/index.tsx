import { useForm } from "react-hook-form";
import { ButtonAdd, InputAdd } from "./style";

export function InputAddMovie({ addMovie }: { addMovie: (newMovie: string) => void }) {
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = (data: any) => {
        addMovie(data.movie)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputAdd
                fullWidth
                label="Qual foi o filme que você assistiu?"
                variant="filled"
                {...register("movie", { required: true })}
            />
            <ButtonAdd fullWidth type="submit">Adicionar</ButtonAdd>
        </form>
    )
}