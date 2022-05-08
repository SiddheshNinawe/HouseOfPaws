import { PrismaClient } from "@prisma/client"

export async function getStaticPaths() {
    const prisma = new PrismaClient()
    const pets = await prisma.pets.findMany();
    const paths = pets.map((pet) => ({ params: { id: pet.id } }));
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const prisma = new PrismaClient()
    const rawPet = await prisma.pets.findUnique({
        where: {
            id: params.id
        }
    })
    return {
        props: {
            pet: JSON.parse(JSON.stringify(rawPet))
        }
    }
}

const PetPage = ({ pet }) => {
    return (
        <div>
            <h1>{pet.name}</h1>
            <div>{pet.type}</div>
            <iframe
                src={`${pet.pic}embed`}
                frameBorder={0}
                width={320}
                height={490}
            />
            <div>{pet.breed}</div>
            <div>{pet.age}</div>
            <div>{pet.gender}</div>
            <div>{pet.description}</div>
        </div>
    )
}

export default PetPage