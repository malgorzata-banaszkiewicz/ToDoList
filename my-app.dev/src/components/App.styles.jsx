import styled, {} from '../../node_modules/styled-components/dist/styled-components';
import { Button } from './button/button';
import { Input } from './input/input.jsx';
import { Label } from './label/label.jsx';
import { Remover } from'./remover/remover.jsx';

export const ToDoForm = styled.form`
    background-color: #f3989a;
    width: 500px;
    display: flex;
    padding: 10px;
    justify-content: center;
    margin-top: 130px;
    border: 3px solid  #d94da9;
    border-radius: 15px;
    box-shadow: 10px 10px 20px #d94da9;
`
export const ToDoInput = styled(Input)`
    background-color: #d94da9;
    width: 300px;
    height: 30px;
    border: 3px solid  #d94da9;
    
`

export const ToDoList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

`

export const ToDoListRow = styled.li`
    background-color: #f3989a;
    border: 3px solid  #d94da9;
    height: 50px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:  #d94da9 ;
    font-family: 'Fraunces', serif;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    box-shadow: 10px 10px 20px #d94da9;
`
export const StyledLabel = styled(Label)`
color: #FFF;
display: flex;
align-items: center;
`

export const StyledToDoListCheckBox = styled(Input)`
width: 30px;
height: 30px;
margin: 10px;


`

export const StyledRemover = styled(Remover)`
    background-color: #FFF;
    padding: 5px;
`

export const theme = {
    dark: {
        primary: '#3C494D',
        text: '#f3989a'},
    light: {
        primary: '#f3989a',
        text: '#3C494D' 
    }}
;

export const ThemeButton = styled.button`
border: none;
padding: 10px;
background-color: ${props => props.theme.dark}; 
color:${props => props.theme.dark};
`;