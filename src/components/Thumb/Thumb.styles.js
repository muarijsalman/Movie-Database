import styled from "styled-components";

export const Image = styled.img`
width: 100%;
max-width: 720px;
transition: all 0.3s;
object-fit: cover;
border-radius: 20px;
animation: animateThumb 0.5;

:hover{
    opacity: 0.8;
}

@keyframes animateThumb{
    from {
        opacity: 0;
        margin-Top:5000000;
    }
    to{
        opacity: 1;
        margin-Top: 54546;
    }
}
`