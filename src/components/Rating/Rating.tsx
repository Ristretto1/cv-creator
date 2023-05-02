import React, {FC} from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: FC<RatingPropsType> = ({value}) => {
    if (value === 1) {
        return (
            <div>
                <Star completed={true}/>
                <Star completed={false}/>
                <Star completed={false}/>
                <Star completed={false}/>
                <Star completed={false}/>
            </div>
        );
    }
    if (value === 2) {
        return (
            <div>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={false}/>
                <Star completed={false}/>
                <Star completed={false}/>
            </div>
        );
    }
    if (value === 3) {
        return (
            <div>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={false}/>
                <Star completed={false}/>
            </div>
        );
    }
    if (value === 4) {
        return (
            <div>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={false}/>
            </div>
        );
    }
    if (value === 5) {
        return (
            <div>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={true}/>
                <Star completed={true}/>
            </div>
        );
    }

    return (
        <div>
            <Star completed={false}/>
            <Star completed={false}/>
            <Star completed={false}/>
            <Star completed={false}/>
            <Star completed={false}/>
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

