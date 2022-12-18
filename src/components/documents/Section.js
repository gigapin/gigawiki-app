import SidebarDocument from './SidebarDocument';

const Section = ({ sections, document, menus }) => {
  return(
    <>
      {sections.map(
        (section) => (
          <div className='pl-4 mb-4'>
            <h4 className="text-green-600 dark:text-lime-400" >{section.title}</h4>
            <SidebarDocument document={document} menus={menus} section={section} key={section.toString()} />
          </div>
        )
      )}
    </>
  )
}

export default Section;