import { DeleteOutline, PlayCircleOutline, LocalMovies, Add, Remove } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { Card, Left, Right, Title, Meta, Action, Badge } from "./style";

type CardMovieProps = {
    movie: string;
    count: number;
    onDelete: () => void;
    onIncrement: () => void;
    onDecrement: () => void;
};

export function CardMovie({ movie, count, onDelete, onIncrement, onDecrement }: CardMovieProps) {
    const canDecrement = count > 1;
    
    return (
        <Card>
            <Left>
                <Badge aria-hidden>
                    <LocalMovies sx={{ fontSize: 18 }} />
                </Badge>
                <div>
                    <Title>{movie.toUpperCase()}</Title>
                    <Meta>
                        <PlayCircleOutline sx={{ fontSize: 18 }} /> {count} views
                    </Meta>
                </div>
            </Left>
            <Right>
                <Tooltip title="Adicionar visualização" placement="top" arrow>
                    <Action aria-label="Adicionar visualização" onClick={onIncrement}>
                        <Add />
                    </Action>
                </Tooltip>
                <Tooltip title={canDecrement ? "Remover visualização" : "Mínimo de visualizações atingido"} placement="top" arrow>
                    <Action 
                        aria-label="Remover visualização" 
                        onClick={onDecrement}
                        disabled={!canDecrement}
                        sx={{        
                            cursor: canDecrement ? 'pointer' : 'not-allowed'
                        }}
                    >
                        <Remove />
                    </Action>
                </Tooltip>
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

