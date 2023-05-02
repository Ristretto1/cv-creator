import React, {FC} from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: FC<RatingPropsType> = ({value}) => {
    return (
        <div>
            <Star completed={value > 0}/>
            <Star completed={value > 1}/>
            <Star completed={value > 2}/>
            <Star completed={value > 3}/>
            <Star completed={value > 4}/>
        </div>
    );
};

type StarPropsType = {
    completed: boolean
}

const Star: FC<StarPropsType> = ({completed}) => {
    if (completed) return <span><b>star</b> </span>;
    return <span>star </span>;
};

