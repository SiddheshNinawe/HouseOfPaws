import { useUser } from "@auth0/nextjs-auth0";
import { Router, useRouter } from "next/router";
import styles from "../../../styles/adopt.module.css";
import { useState } from "react";
import axios from "axios";
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PrismaClient } from "@prisma/client";


export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context) {
        const session = getSession(context.req, context.res)
        const prisma = new PrismaClient()
        const pet = await prisma.pets.findUnique({ where: { id: context.params.id } })
        console.log(pet)
        return {
            props: {
                pet: JSON.parse(JSON.stringify(pet))
            }
        }
    }
})

const AdoptPage = ({ pet }) => {
    const { user, error, isLoading } = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [occupation, setOccupation] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [adopted, setAdopted] = useState(pet.isAdopted)
    const router = useRouter()

    const handleAdopt = async (e) => {
        e.preventDefault();
        const data = {
            id: pet.id,
            name,
            email,
            contact,
            address,
            occupation,
            aadhar,
        };
        try {
            const res = await axios.post("/api/pets/adopt", data);
            if (res.status == 200) {
                router.push(`/pets/${pet.id}`)
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <div className={styles.body}>
                <form onSubmit={handleAdopt}>
                    <h2>Adoption Form for {pet.name}</h2>

                    <div>
                        {/* <div>
                            <label>Pet Id: </label>
                            <input
                                type="text"
                                placeholder="pet Id"
                                onChange={(e) => setId(e.target.value)}
                                defaultValue={pet.id}
                                required
                            />
                        </div> */}
                        <div>
                            <label>Name: </label>
                            <input
                                type="text"
                                placeholder="name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Mobile No: </label>
                            <input
                                type="text"
                                placeholder="mobile"
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Email Id: </label>
                            <input
                                type="email"
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Current Address: </label>
                            <input
                                type="text"
                                placeholder="address"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Occupation: </label>
                            <input
                                type="text"
                                placeholder="occupation"
                                onChange={(e) => setOccupation(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>aadhar No: </label>
                            <input
                                type="text"
                                placeholder="aadhar"
                                onChange={(e) => setAadhar(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>

                        <input type="checkbox" value="check" required />
                        <label>
                            I hearby declare that the information provided is true and
                            correct.
                        </label>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.adopt}>
                            Adopt
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdoptPage;
