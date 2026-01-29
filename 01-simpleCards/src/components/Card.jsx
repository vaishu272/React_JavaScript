import { useState } from "react";

const Card = (props) => {
  const [likes, setLikes] = useState(0);
  return (
    <>
      <div>
        <div className="card">
          <img src={props.img} alt="Image" />
          <h1>Hello, I'm {props.user}</h1>
          <h3>
            {" "}
            I'm {props.age} years old
            <button onClick={() => props.greetingUser(props.user)}>
              Greet
            </button>
            <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>
          </h3>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
            nihil.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
