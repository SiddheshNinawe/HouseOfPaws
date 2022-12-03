import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import styles from "../../styles/pets.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from '../../components/navbar'

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const pets = await prisma.pets.findMany();
    return {
        props: {
            pets: JSON.parse(JSON.stringify(pets)),
        },
        revalidate: 10,
    };
}

const PetsPage = ({ pets }) => {
    const { user, error, isLoading } = useUser();
    return (
        <div className={styles.body}>
            <div className={styles.navbar}>
                <nav>
                    <div className="logo">
                        <img src="/logo.png" />
                    </div>
                    <ul>
                        <li>
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="../pets">

                                <a className="nav-link">Our Animals</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className="nav-link">
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            {user && (
                                <Link href="/api/auth/logout">
                                    <a className="nav-link">
                                        Logout
                                    </a>
                                </Link>
                            )}
                            {!user && (
                                <Link href="/api/auth/login">
                                    <a className="nav-link">
                                        Login
                                    </a>
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={styles.bgimage}>
                <h1>Our Animals</h1>
                <h2>
                    Here you can find the animals that are currently looking for their
                    forever home.
                </h2>
            </div>

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
                            {/* <div>Description : {pet.description}</div> */}

                            <div className={styles.buttons}>
                                <button className={styles.readMore}>
                                    <Link href={`/pets/${pet.id}`}>
                                        <a>Read More</a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <h2>Contact Details</h2>
                <div>
                    <h4>
                        <span> &#9906; </span>
                        S.B.Jain, Nagpur, Maharashtra
                    </h4>
                </div>
                <div>
                    <h4>
                        <span> &#9743; </span> 7771976134
                    </h4>
                </div>
                <div>
                    <h4>
                        <span>&#9993; </span> houseofpaws@gmail.com
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default PetsPage;
