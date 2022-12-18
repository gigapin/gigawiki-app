import { Link } from "react-router-dom";

const PaginatePage = ({ document, prev, next }) => {
  return(
    <div className="place-self-end h-16 mt-4 border-t border-emerald-600">
      <div className="flex justify-between text-center md:justify-around py-2 mb-4 md:py-4">
        {
          (prev !== null) ?
            <div className="border rounded-lg border-teal-300 py-4 hover:shadow-md px-1 md:px-2 lg:px-8">
              <Link to={`/documents/${document.slug}/${prev.slug}`} className="text-sm lg:text-base">{prev.title}</Link>
            </div> :
            null
        }
        {
          (next !== null) ?
            <div className="border rounded-lg border-teal-300 py-4 hover:shadow-md px-1 md:px-2 lg:px-8">
              <Link to={`/documents/${document.slug}/${next.slug}`} className="text-sm lg:text-base">{next.title}</Link>
            </div> :
            null
        }
      </div>
    </div>
  )
}

export default PaginatePage;