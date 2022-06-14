import logo from './logo.svg';
import './App.css';
import './Header';
import './Content';
import './Footer';

const compromissos = ['Escovar os dentes', 'Tomar café', 'Tomar banho', 'Estudar', 'Almoçar'];

function Task(value) {
  return (
    compromissos.map((compromisso) => <li key="item">{compromisso}</li>)
    // <li>{'Simbora aprender React!!!!'}</li>
  );
}

export default Task;
