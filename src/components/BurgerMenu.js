import { useState, useEffect } from 'react'
import NavMobile from './NavMobile'
import styled from 'styled-components';


const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    transform:translateY(-50%);
    left: 20px;
    z-index:20;
    display:none;

    @media (max-width: 768px) {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index:20050;
    }
    
div{
    height: 0.25rem; 
    background-color: ${({ open })=> open ? 'var(--firstColor)': 'var(--thirdColor)'}; 
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
        width: ${({ open }) => open ? '2rem' : '0.5rem' };
        transform-origin: right;
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)' }; 
    }
    &:nth-child(2) {
        width: 1.5rem;
        transform: ${({ open }) => open ? 'translate(-100%)' : 'translateX(0)' };
        opacity:${({ open }) => open ? 0 : 1 };
    }
    &:nth-child(3) {
        width: 2rem; 
        transform-origin: right;
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)' }; 
    }
`;

const BurgerMenu = (props) => {
    const [open, setOpen] = useState(false)
     
     useEffect(() => {
         open ? document.body.style.overflow='hidden' : document.body.style.overflow='auto'
     }, [open])

    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <NavMobile open={open} setOpen={setOpen} active={props.active} props={props} switchTheme={props.switchTheme} disconnect={props.disconnect}/>
        </>
    )
}

export default BurgerMenu
