import "./App.css";

import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <article>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="Portrait of Morty Smith"
          ></img>
          <section>
            <p>Morty Smith</p>
            <button>Show more</button>
          </section>
        </article>
      </main>
      <nav>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </nav>
    </div>
  );
}

export default App;
