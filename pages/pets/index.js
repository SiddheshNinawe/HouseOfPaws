import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import styles from '../../styles/pets.module.css'

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const pets = await prisma.pets.findMany();
    return {
        props: {
            pets: JSON.parse(JSON.stringify(pets)),
        },
        revalidate: 10
    };
}

const PetsPage = ({ pets }) => {
    return (
        <div className={styles.container}>
            {pets.map((pet) => (
                <div key={pet.id} className={styles.card}>
                    <iframe
                        src={`${pet.pic}embed`}
                        frameBorder={0}
                        width={320}
                        height={490}
                    />
                    <div className={styles.cardDetails}>
                        <Link href={`/pets/${pet.id}`}>
                            <a>
                                <h1>{pet.name}</h1>
                            </a>
                        </Link>
                        <div>Type : {pet.type}</div>
                        <div>Breed : {pet.breed}</div>
                        <div>Age : {pet.age}</div>
                        <div>Gender : {pet.gender}</div>
                        <div>Description : {pet.description}</div>


                        <button className={styles.adopt}>Adopt</button>

                    </div>

                </div>
            ))}
        </div>
    );
};

export default PetsPage;
