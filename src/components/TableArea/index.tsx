import * as c from './styles';
import { Item } from '../../types/Item';
import {TableItem} from '../TableItem'



type props = {
    list: Item[]
}
export const TableArea = ({ list }: props) => {

    return (
        <c.Table>
            <thead>
                <tr>
                    <c.TabbleHeadColumn width={150}>Data</c.TabbleHeadColumn>
                    <c.TabbleHeadColumn width={250}>Categoria</c.TabbleHeadColumn>
                    <c.TabbleHeadColumn>Titulo</c.TabbleHeadColumn>
                    <c.TabbleHeadColumn width={130}>Valor</c.TabbleHeadColumn>
                </tr>

            </thead>
            <tbody>
                {list.map((item, index) => (
                  <TableItem key={index} item ={item}/>
                ))}

            </tbody>
        </c.Table>
    );
}