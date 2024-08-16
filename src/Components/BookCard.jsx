import React, { useContext } from 'react'
import { themeContext } from '../Context/ThemeContext'

const BookCard = ({book}) => {
  const {theme} = useContext(themeContext)
  return (
    <div>
      <div className={`bg-[#291e54] rounded-lg overflow-hidden shadow-lg p-6 ${theme === "light" ? "text-black bg-slate-200":"text-white"} hover:-translate-y-4 transition-all`}>
      <img src={book.imageUrl} alt={book.title} className="w-full h-96  mb-4 rounded " />
      <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
      <p className="mb-4">{book.description}</p>
      <a href={book.link} className="text-blue-400 hover:text-blue-600 font-semibold">Read More</a>
    </div>
      
    </div>
  )
}

export default BookCard
