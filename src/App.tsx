import { useState, useEffect} from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth } from './helpers/dateFilter'; 
import { filterListByMonth } from './helpers/dateFilter';

const App = () => {



  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth] );


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle de Finanças Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>
        ...
      </C.Body>
    </C.Container>

  );

}

export default App;