import { PrismaClient } from "@prisma/client";

const createPetRoute = async (req, res) => {
    const prisma = new PrismaClient();
    if (req.method == "POST") {
        const { name, type, picUrl, breed, age, gender, description } = await req.body;

        try {
            const data = await prisma.pets.create({
                data: {
                    name: name,
                    age: parseInt(age),
                    description: description,
                    gender: gender,
                    type: type,
                    pic: picUrl,
                    breed: breed,
                    isAdopted: false,
                }
            });

            res.json(data.id);
            res.status(200).end();

        } catch (error) {
            console.log(error)
            res.status(500).end()
        }
    }
    res.status(405).end()
}

export default createPetRoute