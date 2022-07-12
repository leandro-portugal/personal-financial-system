import { type } from '@testing-library/user-event/dist/type';
import * as C from './styles';

type props = {
    title: string;
    value: number;
    color ?: string
}
export const ResumeItem = ({ title, value, color}: props) =>{
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color ={color}>R$ {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</C.Info>
        </C.Container>
    );
}