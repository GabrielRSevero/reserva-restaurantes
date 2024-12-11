import { Box } from "~/components"
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="h-full flex justify-center items-center">
      <Box className="flex flex-col gap-4 border border-damask-200 p-2 rounded-sm w-[400px]">
        <h2 className="text-damask-800 text-center uppercase rounded-sm">Bem vindo, {JSON.parse(localStorage.getItem("user") ?? "").name?.split(" ")[0]}!</h2>
        <ul className="gap-2 grid">
          <Link to="/reservas">
            <li className="border border-damask-200 p-2 text-damask-800 rounded-sm flex items-center justify-between cursor-pointer hover:bg-damask-200">
                Minhas reservas <GrLinkNext className="w-4 h-4" />
            </li>
          </Link>
          <Link to="/reservar">
            <li className="border border-damask-200 p-2 text-damask-800 rounded-sm flex items-center justify-between cursor-pointer hover:bg-damask-200">
                Realizar reserva <GrLinkNext className="w-4 h-4" />
            </li>
          </Link>
        </ul>
      </Box>
    </div>
  )
}

export default Home