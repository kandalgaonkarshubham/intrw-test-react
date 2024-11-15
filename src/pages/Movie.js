export default function Movie({ movie, selectedMovies, handleCheckbox }) {
  return (
    <div className="w-full max-w-screen-sm mx-auto block py-12 space-y-3">
      <div className="border border-gray-500 rounded-md p-4 w-full space-y-4">
        <div className="flex items-center justify-between text-lg font-bold">
          <p>{movie.movie}</p>
          <input type="checkbox" className="w-6 h-6" checked={selectedMovies.includes(movie.id)} onChange={() => handleCheckbox(movie.id)} />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm">Rating &mdash;</p>
          <p className="text-6xl font-black">{movie.rating}</p>
        </div>
      </div>
    </div>
  )
}
