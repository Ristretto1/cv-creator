import React, {FC, useState} from 'react';

type RatingPropsType = {}

export const UncontrolledRating: FC<RatingPropsType> = ({}) => {
    const [value, setValue] = useState<number>(0)
    return (
        <div>
            <Star completed={value > 0} callback={() => setValue(1)}/>
            <Star completed={value > 1} callback={() => setValue(2)}/>
            <Star completed={value > 2} callback={() => setValue(3)}/>
            <Star completed={value > 3} callback={() => setValue(4)}/>
            <Star completed={value > 4} callback={() => setValue(5)}/>
        </div>
    );
};

type StarPropsType = {
    completed: boolean
    callback: () => void
}

const Star: FC<StarPropsType> = ({completed, callback}) => {
    if (completed) return <span onClick={callback}><b>star</b> </span>;
    return <span onClick={callback}>star </span>;
};

