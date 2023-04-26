import React from 'react'
import Button from 'react-bootstrap/Button';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function Pagination() {
    return (
        <div className='pagination'>
            <Button className='button__pagination button__left' ><IoIosArrowBack /></Button>
            <Button className='button__pagination' >1</Button>
            <Button className='button__pagination' >2</Button>
            <Button className='button__pagination' >3</Button>
            <Button className='button__pagination' >4</Button>
            <Button className='button__pagination active' >5</Button>
            <Button className='button__pagination' >6</Button>
            <Button className='button__pagination' >7</Button>
            <Button className='button__pagination' >...</Button>
            <Button className='button__pagination button__right' ><IoIosArrowForward /></Button>
        </div>
    )
}
