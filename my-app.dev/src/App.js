import logo from './logo.svg';
import './App.css';
import { ToDoListRow } from './components/App.styles';
import { ToDoList } from './components/App.styles';

function App() {
  return (
    <ToDoList>
      <ToDoListRow>Wyrzuć śmieci</ToDoListRow>
      <ToDoListRow>Odkurz mieszkanie</ToDoListRow>
      <ToDoListRow>Zrób ciemne pranie</ToDoListRow>
      <ToDoListRow>Zrób jasne pranie</ToDoListRow>
      <ToDoListRow>Umyj prysznić</ToDoListRow>
      <ToDoListRow>Usuń kamień z czajnika</ToDoListRow>
      </ToDoList>
  );
}

export default App;
