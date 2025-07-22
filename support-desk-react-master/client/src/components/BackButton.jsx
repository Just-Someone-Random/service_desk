import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BackButton = ({ url }) => {
  return (
    <Link
      to={url}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full shadow-md transition-all duration-200"
    >
      <FaArrowCircleLeft className="text-xl" />
      <span className="font-medium">Back</span>
    </Link>
  )
}

export default BackButton
