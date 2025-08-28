import { Delete, Slideshow } from "@mui/icons-material";
import { BoxMovie, BoxText, ButtonDelete, SeeMovie, Title } from "./style";

export function CardMovie({ movie, count, handleDelete }: any) {
    return (
        <BoxMovie>
            <BoxText>
                <Title>{movie.toUpperCase()}</Title>
                <SeeMovie>
                    <Slideshow sx={{ fontSize: 30 }} />
                    : {count}
                </SeeMovie>
            </BoxText>
            <ButtonDelete onClick={() => handleDelete()}>
                <Delete />
            </ButtonDelete>
        </BoxMovie>
    )
}