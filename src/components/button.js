import style from 'styled-components'

const ButtonContainer = style.button`
    background: transparent;
    border: 2px solid var(--orange);
    border-color:${props => props.cart? "var(--orange)" : "var(--primary)"};
    border-radius: 8px;
    color:${props => props.cart? "var(--orange)" : "var(--primary)"};
    padding: 3px 8px;
    transition: all 0.1s ease-in;
    margin-right: 3px;
    margin-bottom: 3px;
    font-size: 24px;
    &:hover{
        background: ${props => props.cart? "var(--orange)" : "var(--primary)"};
        color: var(--white);
    }
`
export default ButtonContainer