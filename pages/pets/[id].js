import { PrismaClient } from "@prisma/client";
import styles from "../../styles/id.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const pets = await prisma.pets.findMany();
  const paths = pets.map((pet) => ({ params: { id: pet.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const rawPet = await prisma.pets.findUnique({
    where: {
      id: params.id,
    },
  });
  return {
    props: {
      pet: JSON.parse(JSON.stringify(rawPet)),
    },
  };
}

const PetPage = ({ pet }) => {
  const { user, error, isLoading } = useUser();

  return (
    <div className={styles.body}>
      <section>
        <h1>Animal Info</h1>
        
          <iframe
            src={`${pet.pic}embed`}
            frameBorder={0}
            width={320}
            height={490}
        />
        
        <div><b>Name : </b>{pet.name}</div>
        <div><b>Id : </b>{pet.id}</div>
        <div><b>Type : </b>{pet.type}</div>
        <div><b>Breed : </b>{pet.breed}</div>
        <div><b>Age : </b>{pet.age}</div>
        <div><b>Gender : </b>{pet.gender}</div>
        <div><b>Description : </b>{pet.description}</div>

        {!pet.isAdopted && (
          <Link href="/pets/adopt">
            <div className={styles.buttons}>
              <button className={styles.adopt}>
                <a>Adopt</a>
              </button>
            </div>
          </Link>
        )}
        {pet.isAdopted && <div>Adopted By : {pet.adoptedBy}</div>}
      </section>
    </div>
  );
};

export default PetPage;
