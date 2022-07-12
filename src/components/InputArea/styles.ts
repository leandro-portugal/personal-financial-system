import styled from "styled-components";

export const Container = styled.div` 

background-color: #FFF;
padding: 20px;
box-shadow: 0px 0px 2px #A9A9A9;
border-radius: 5px;
margin-top: 20px;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid 	#1E90FF;;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid 	#1E90FF;;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid 	#1E90FF;
    border-radius: 5px;
    background-color: 	#1E90FF;
    color: #FFF;
    cursor: pointer;

    &:hover {
        background-color: blue;
        color: white;
    }
`;
