import { Loading } from "../Loading"

export const Button = ({ type = "button", onClick, children, loading = false }: any) => {
  return (
    <button 
      type={type} 
      className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md py-3 text-white uppercase"
      onClick={onClick}
    >
      {loading ? (
        <div className="flex justify-center items-center gap-2">
          <Loading />
          Aguarde...
        </div>
      ) : (
        children
      )}
    </button>
  )
}