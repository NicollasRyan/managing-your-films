import { DeleteOutline, PlayCircleOutline } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Card, Left, Right, Title, Meta, Action } from "./style";

type CardMovieProps = {
    movie: string;
    count: number;
    onDelete: () => void;
};

export function CardMovie({ movie, count, onDelete }: CardMovieProps) {
    return (
        <Card>
            <Left>
                <div>
                    <Title>{movie.toUpperCase()}</Title>
                    <Meta>
                        <PlayCircleOutline sx={{ fontSize: 18 }} /> {count} views
                    </Meta>
                </div>
            </Left>
            <Right>
                <Tooltip title="Remover" placement="top" arrow>
                    <Action aria-label="Remover filme" onClick={onDelete}>
                        <DeleteOutline />
                    </Action>
                </Tooltip>
            </Right>
        </Card>
    );
}

export default CardMovie;

