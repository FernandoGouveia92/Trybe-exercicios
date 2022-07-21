import logo from './logo.svg';
import './App.css';
import FormNewProject from './Components/FormNewProject'
import Header from './Components/Header'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: data,
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <>
        <Header />
        <FormNewProject />
        <div className="container">
          {
            projects.map((project) => (
              <div className="Project__content" key={ project.title }>
                {project.title}
                <p>
                  {`Dificuldade ${project.level}`}
                </p>
                <img src={ project.thumbnail } alt="" width={ 100 }/>
                </div>
            ))
          }
        </div>
      </>
    )
  }
}

export default App;
