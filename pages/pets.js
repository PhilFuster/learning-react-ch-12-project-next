import Layout from './Layout';
import fetch from 'isomorphic-unfetch';
pets.getInitialProps = async function () {
  const res = await fetch(`https://pet-library.moonhighway.com/api/pets`);

  const data = await res.json();
  return {
    pets: data,
  };
};
export default function pets(props) {
  return (
    <Layout>
      <div>
        <h1>Pets!</h1>
        <ul>
          {props.pets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
