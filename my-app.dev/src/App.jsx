
import './App.css';
import { ToDoListRow, ToDoList, ToDoForm, ToDoInput, StyledToDoListCheckBox, StyledLabel, StyledRemover, theme, ThemeButton } from './components/App.styles'
import { ThemeProvider } from 'styled-components';
import { taskCompleted } from './components/checkbox/checkbox';


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <ThemeButton>Hello</ThemeButton>
    <ToDoForm> 
      <ToDoInput placeholder="Dodaj zadanie"></ToDoInput>
    </ToDoForm>
    <ToDoList>
      <ToDoListRow>Wyrzuć śmieci
        <StyledRemover>&#10060;</StyledRemover>
        <StyledLabel htmlFor="checkbox"> 
        Zrobione! 
          <StyledToDoListCheckBox 
          type="checkbox" name="checkbox" id={Math.random()} onChange ={taskCompleted}>
          </StyledToDoListCheckBox>
        </StyledLabel>

      </ToDoListRow>
      <ToDoListRow>Odkurz mieszkanie
      <StyledRemover>&#10060;</StyledRemover>
        <StyledLabel htmlFor="checkbox"> 
        Zrobione! 
          <StyledToDoListCheckBox 
          type="checkbox" name="checkbox" id={Math.random()} onChange ={taskCompleted}>
          </StyledToDoListCheckBox>
        </StyledLabel>
      </ToDoListRow>
      <ToDoListRow>Zrób ciemne pranie
      <StyledRemover>&#10060;</StyledRemover>
        <StyledLabel htmlFor="checkbox"> 
        Zrobione! 
          <StyledToDoListCheckBox 
          type="checkbox" name="checkbox" id={Math.random()} onChange ={taskCompleted}>
          </StyledToDoListCheckBox>
        </StyledLabel>
      </ToDoListRow>
      <ToDoListRow>Zrób jasne pranie
      <StyledRemover>&#10060;</StyledRemover>
        <StyledLabel htmlFor="checkbox"> 
        Zrobione! 
          <StyledToDoListCheckBox 
          type="checkbox" name="checkbox" id={Math.random()} onChange ={taskCompleted}>
          </StyledToDoListCheckBox>
        </StyledLabel>
      </ToDoListRow>
      <ToDoListRow>Umyj prysznic
      <StyledRemover>&#10060;</StyledRemover>
        <StyledLabel htmlFor="checkbox"> 
        Zrobione! 
          <StyledToDoListCheckBox 
          type="checkbox" name="checkbox" id={Math.random()} onChange ={taskCompleted}>
          </StyledToDoListCheckBox>
        </StyledLabel>
      </ToDoListRow>
      <ToDoListRow>Usuń kamień z czajnika
      <StyledRemover>&#10060;</StyledRemover>
        <StyledLabel htmlFor="checkbox"> 
        Zrobione! 
          <StyledToDoListCheckBox 
          type="checkbox" name="checkbox" id={Math.random()} onChange ={taskCompleted}>
          </StyledToDoListCheckBox>
        </StyledLabel>
      </ToDoListRow>
      </ToDoList>
      </ThemeProvider>
      </>
  );
}

export default App;
