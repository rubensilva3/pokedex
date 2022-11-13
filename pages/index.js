import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { pokemon } = props;
  console.log(pokemon.results);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {pokemon.results.map((elem) => (
          <>
            {elem.sprites}
            <h3 key={elem.name}>{elem.name}</h3>
          </>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=905");

  const data = await req.json();

  return {
    props: { pokemon: data },
  };
}
