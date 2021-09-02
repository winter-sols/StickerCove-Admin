import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle, faBell } from "@fortawesome/free-regular-svg-icons"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import Table from "rc-table"
import "./style.scss"

const Dashboard = ({
  newOrders,
  showLogout,
  columns,
  onHideShowLogout,
  onChangeShowLogout,
  onLogoutHandler,
}) => (
  <div className="dashboard flex flex-column">
    <div className="dashboard-header flex">
      <div className="dashboard-header-notification">
        <FontAwesomeIcon icon={faBell} />
        {newOrders.length !== 0 && (
          <div className="dashboard-header-notification-badge flex">
            {newOrders.length}
          </div>
        )}
      </div>
      <div
        className="dashboard-header-avatar flex"
        onClick={onChangeShowLogout}
      >
        Howdy, Admin
        <FontAwesomeIcon icon={faUserCircle} />
        {showLogout && (
          <div className="dashboard-header-avatar-submenu flex flex-column">
            <div className="flex" onClick={onLogoutHandler}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </div>
          </div>
        )}
      </div>
    </div>

    <div className="dashboard-main flex flex-column" onClick={onHideShowLogout}>
      <div className="dashboard-main-orders">
        <Table columns={columns} data={newOrders} />
      </div>
    </div>
  </div>
)

export default Dashboard
