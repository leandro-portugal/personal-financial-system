import * as C from './styles';
import {Item} from '../../types/Item';
import {formatDate} from '../../helpers/dateFilter';


type props ={
    item: Item;
}

export const TableItem = ({item}: props)=>{
    return(

        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value}</C.TableColumn>


        </C.TableLine>
    );
}