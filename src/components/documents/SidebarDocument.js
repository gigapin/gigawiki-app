import { Link } from "react-router-dom";

const SidebarDocument = ({ document, menus, section }) => {
  return(
    <>
    {
      menus.filter(menu => section.id === menu.section_id).map(
        (menu) => (
            <div className="pl-3" key={menu.id}>
              <Link to={`/documents/${document.slug}/${menu.slug}`} className="text-lime-700 dark:text-lime-100 text-sm">
                {menu.title}
              </Link>
            </div>
          )
        )
    }
    </>
  )
}
export default SidebarDocument;