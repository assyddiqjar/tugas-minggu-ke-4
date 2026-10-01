import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

import fajarPhoto from "./assets/pas_foto.JPG";
import secondChoicePhoto from "./assets/Smitty Werbenjägermanjensen Formal Portrait.png";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="card-container">
        <Card
          nama="Muhammad Fajar Assyddiq"
          pekerjaan="Frontend Developer"
          deskripsi="Saya sedang belajar React dan pengembangan website."
          foto={fajarPhoto}
        />

        <Card
          nama="Smitty Werbenjägermanjensen"
          pekerjaan="React Learner"
          deskripsi="Belajar membuat component dan aplikasi menggunakan React."
          foto={secondChoicePhoto}
        />
      </main>
    </div>
  );
}

export default App;