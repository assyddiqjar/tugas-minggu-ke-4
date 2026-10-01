import { useState } from "react";

function Card({ nama, pekerjaan, deskripsi, foto }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
      <img
        src={foto}
        alt={`Foto profil ${nama}`}
        className="profile-photo"
      />

      <h2>{nama}</h2>
      <h3>{pekerjaan}</h3>

      <p>{deskripsi}</p>

      <p>
        ❤️ {likes} {likes === 1 ? "Like" : "Likes"}
      </p>

      <button onClick={() => setLikes(likes + 1)}>
        Like
      </button>
    </div>
  );
}

export default Card;