import React, {useState} from 'react';

export type RatingValueType = 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    ratingValue:  RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export const Rating = (props: RatingPropsType) => {


    return (
        <div>
            <Star selected={props.ratingValue > 0} setValue={props.setRatingValue} value={1}/>
            <Star selected={props.ratingValue > 1} setValue={props.setRatingValue} value={2}/>
            <Star selected={props.ratingValue > 2} setValue={props.setRatingValue} value={3}/>
            <Star selected={props.ratingValue > 3} setValue={props.setRatingValue} value={4}/>
            <Star selected={props.ratingValue > 4} setValue={props.setRatingValue} value={5}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    setValue: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => {
            props.setValue(props.value)
        }}>{props.selected ? <b>star</b> : 'star'}</span>
    )
}

