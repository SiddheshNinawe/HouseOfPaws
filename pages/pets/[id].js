import { PrismaClient } from "@prisma/client";
import styles from "../../styles/id.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from '../../components/navbar';
import Footer from "../../components/footer";

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
    include: {
      adoptedBy: {
        select: {
          name: true
        }
      }
    }
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
      <NavBar />
      <section>
        <h1>Animal Info</h1>

        <iframe
          src={`${pet.pic}embed`}
          frameBorder={0}
          width={320}
          height={490}
        />
        <br />
        {pet.isAdopted && <div><b>Adopted By : {pet.adoptedBy.name}</b></div>}
        <br />
        <div><b>Name : </b>{pet.name}</div>
        <div><b>Id : </b>{pet.id}</div>
        <div><b>Type : </b>{pet.type}</div>
        <div><b>Breed : </b>{pet.breed}</div>
        <div><b>Age : </b>{pet.age}</div>
        <div><b>Gender : </b>{pet.gender}</div>
        <div><b>Description : </b>{pet.description}</div>

        {!pet.isAdopted && (
          <Link href={`/pets/adopt/${pet.id}`}>
            <div className={styles.buttons}>
              <button className={styles.adopt}>
                <a>Adopt</a>
              </button>
            </div>
          </Link>
        )}

      </section>
      <Footer />
    </div>
  );
};

export default PetPage;
