import SidebarContent from './SidebarContent'
import { workItems } from '../../../utilities/workData'

const WorkItemSidebar = ({ activeItem, onClose }) => {
    if (!activeItem) return null

    return (
        <div className="sidebar-container">
            <SidebarContent activeItem={activeItem} onClose={onClose} />
        </div>
    )

}

export default WorkItemSidebar
