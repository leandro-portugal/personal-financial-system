import { useState, useEffect} from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth } from './helpers/dateFilter'; 
import { filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { Information } from './components/Information';



const App = () => {



  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(()=>{
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth] );

  useEffect(()=>{

    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList] );

const monthChange = (newMonth: string) => {
  setCurrentMonth(newMonth);
}
   
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Controle de Finanças Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>
        <Information 
        currentMonth= {currentMonth}
        onMonthChange ={monthChange}
        income = {income}
        expense = {expense}
        />
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>

  );

}

export default App;