import { PrismaClient } from "@prisma/client";

const createPetRoute = async (req, res) => {
    const prisma = new PrismaClient();
    if (req.method == "POST") {
        const { id, name, email, contact, address, occupation, aadhar } =
            await req.body;

        try {
            console.log(id, name, email, contact, address, occupation, aadhar);
            const adopter = await prisma.adopter.create({
                data: {
                    petId: id,
                    name: name,
                    email: email,
                    contact: contact,
                    address: address,
                    occupation: occupation,
                    aadhar: aadhar,
                },
            });
            res.status(200).end();
        } catch (error) {
            console.log(error);
            res.status(500).end();
        }
    }
    res.status(405).end();
};

export default createPetRoute;
