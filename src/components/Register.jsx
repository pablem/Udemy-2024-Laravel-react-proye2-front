import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../api/axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/register', { 
        name, 
        email, 
        password, 
        passwordConfirmation
      });
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirmation("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div
            className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
          >
            <div className="mb-10 text-center md:mb-16">Web Encuestas</div>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">error</span>
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">error</span>
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">error</span>
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Confirme su contraseña"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                />
              </div>
              <div className="mb-10">
                <button
                  type="submit"
                  className="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                >
                  Registrarse
                </button>
              </div>
            </form>
            <Link
              to="/login"
              className="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register