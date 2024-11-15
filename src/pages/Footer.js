export default function Footer({ selectedMovies }) {
  return (
    <div className="min-h-24 text-xl flex items-center gap-4">
      {selectedMovies.length == 0 ?
        <span>No Movies Selected</span>
        :

        selectedMovies.map((id) => (
          <p key={id} className="bg-red-400 rounded-full p-2">{id}</p>
        ))

      }
    </div>
  )
}
