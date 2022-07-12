import * as C from './styles';
import React, { useEffect } from 'react';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
type props = {

    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number
}


export const Information = ({ currentMonth, onMonthChange, expense, income }: props) => {

    useEffect(() => {
        document.title = 'Gerenciador de Despesas';
    });

    const prevMonth = () => {

        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)

    }

    const nextMonth = () => {

        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
    }

    return (

        <C.Container>

            <C.MonthInfo>
                <C.MonthArrow onClick={prevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={nextMonth}>➡️</C.MonthArrow>
            </C.MonthInfo>

            <C.ResumeInfo>
                <ResumeItem title="Despesas" value={expense}></ResumeItem>
                <ResumeItem title="Receitas" value={income}></ResumeItem>
                <ResumeItem 
                title="Balanço" 
                value={income - expense}
                color={(income - expense)< 0 ? 'red': 'green'}
                
                ></ResumeItem>

            </C.ResumeInfo>
        </C.Container>
    );
}

export default Information;