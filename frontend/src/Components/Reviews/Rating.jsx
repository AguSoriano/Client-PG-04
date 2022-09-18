import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import style from "./Reviews.module.css";

export default function Rating({ rating }) {

    switch (rating) {
        case 1:
            return <div className={style.stars}>
                {<AiFillStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}

            </div>//1 sola estrella

        case 2:
            return <div className={style.stars}>
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}

            </div>//2 estrellas

        case 3:
            return <div className={style.stars}>
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
            </div> //3 estrellas

        case 4:
            return <div className={style.stars}>
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiOutlineStar />}
            </div>//4 estrellas

        case 5:
            return <div className={style.stars}>
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
            </div> //5 estrellas

        default:
            return <div className={style.stars}>
                {<AiOutlineStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
                {<AiOutlineStar />}
            </div> //estrellas vacias
    }
}