import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

function HelloWorld() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>
        ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
        quam aperiam sint, beatae necessitatibus pariatur sed atque placeat.
        Deleniti, velit tempora. Repellendus quos quia assumenda delectus ab
        esse quas ducimus?
      </p>
      <h1>Hello Again</h1>
      <p>
        ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
        voluptas illum nostrum ab itaque! Debitis voluptatibus, dolorem aliquam
        iste est accusamus soluta, ducimus laborum dolores ratione quae quasi
        porro? Perferendis!
      </p>
    </article>
  );
}
