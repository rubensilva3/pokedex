import { useRouter } from "next/router";

export default function Pokemon(props) {
  const router = useRouter();
  const { id } = router.query;
  const { pokemon } = props;

  return (
    <>
      <h1>Pokemon {id}</h1>
      <h2>{pokemon.name}</h2>
      <h2>{pokemon.height}</h2>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

  const data = await req.json();
  console.log(data);

  return {
    props: { pokemon: data }, // will be passed to the page component as props
  };
}
