import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

export default function CreatePet() {

    const router = useRouter()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [picUrl, setPicUrl] = useState('')
    const [breed, setBreed] = useState('')
    const [age, setAge] = useState(1)
    const [gender, setGender] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name,
            type,
            picUrl,
            breed,
            age,
            gender,
            description
        }
        try {
            const res = await axios.post('/api/pets/create', data);
            if (res.status == 200) {
                router.push(`/pets/${res.data}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter pet name" type="text" onChange={(e) => setName(e.target.value)} />
                <input placeholder="Enter pet type" type="text" onChange={(e) => setType(e.target.value)} />
                <input placeholder="Enter pet Picture Url" type="url" onChange={(e) => setPicUrl(e.target.value)} />
                <input placeholder="Enter pet breed" type="text" onChange={(e) => setBreed(e.target.value)} />
                <input placeholder="Enter pet age" type="number" onChange={(e) => setAge(e.target.value)} />
                <input placeholder="Enter pet gender" type="text" onChange={(e) => setGender(e.target.value)} />
                <input placeholder="Enter pet description" type="text" onChange={(e) => setDescription(e.target.value)} />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}