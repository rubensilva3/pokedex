import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home(props) {
  const { pokemon } = props;
  console.log(pokemon.results);
  const getPokemonNumber = (index) => ("000" + index).substr(-3);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {pokemon.results.map((elem, index) => (
          <div key={elem.name} className={styles.card}>
            <h3 key={elem.name}>{elem.name}</h3>
            <h3 key={elem.name}>{elem.name}</h3>
            <Image
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonNumber(
                index + 1
              )}.png`}
              alt={elem.name}
              width={100}
              height={100}
            />

            <h3 key={index + 1}>{`#${index + 1}`}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=900");

  const data = await req.json();

  return {
    props: { pokemon: data },
  };
}
