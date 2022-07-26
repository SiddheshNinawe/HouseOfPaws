import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import styles from "../../styles/adopt.module.css";
import { useState } from "react";
import axios from "axios";

const AdoptPage = () => {
  const { user, error, isLoading } = useUser();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [aadhar, setAadhar] = useState("");

  const handleAdopt = async (e) => {
    e.preventDefault();
    const data = {
      id,
      name,
      email,
      contact,
      address,
      occupation,
      aadhar,
    };
    try {
      const res = await axios.post("/api/pets/adopt", data);
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return (
      <>
        <div className={styles.body}>
          <form onSubmit={handleAdopt}>
            <h2>Adoption Form</h2>
            <div>
              <div>
                <label>Pet Id: </label>
                <input
                  type="text"
                  placeholder="pet Id"
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
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
                <button  className={styles.adopt}>
                <a>Adopt</a>
                </button>
              </div>
          </form>
        </div>
      </>
    );
  } else {
    const router = useRouter();
    router.push("/api/auth/login");
    return <p>Redirecting...</p>;
  }
};

export default AdoptPage;
