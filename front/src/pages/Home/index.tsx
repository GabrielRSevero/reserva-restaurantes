import { Box } from "~/components"
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-r from-pink-500 to-rose-500">
      <Box className="flex flex-col gap-4 bg-white/10 p-10 rounded-md w-[400px]">
        <h2 className="text-white text-center uppercase p-4 rounded-md">Bem vindo, {JSON.parse(localStorage.getItem("user") ?? "").name?.split(" ")[0]}!</h2>
        <ul className="gap-2 grid">
          <Link to="/reservas">
            <li className="bg-white/10 p-2 text-white rounded-md flex items-center justify-between cursor-pointer hover:bg-gradient-to-r from-violet-600 to-indigo-600">
                Minhas reservas <GrLinkNext className="w-4 h-4" />
            </li>
          </Link>
          <Link to="/reservar">
            <li className="bg-white/10 p-2 text-white rounded-md flex items-center justify-between cursor-pointer hover:bg-gradient-to-r from-violet-600 to-indigo-600">
                Realizar reserva <GrLinkNext className="w-4 h-4" />
            </li>
          </Link>
        </ul>
      </Box>
    </div>
  )
}

export default Home