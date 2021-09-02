import { useState } from "react"
import { useHistory } from "react-router"
import DashboardComponent from "components/Dashboard"

import { ROUTERS, SHIPPING_STATUS } from "configurations"

const Dashboard = () => {
  const history = useHistory()
  const [newOrders, setNewOrders] = useState([
    {
      key: "1",
      url: "123123",
      size: "5 x 5",
      quantity: "50",
      status: "ON_HOLD",
    },
  ])
  const [showLogout, setShowLogout] = useState(false)

  const onRenderShippingStatus = (status) => {
    console.log("What's the status?", status)
    if (status === SHIPPING_STATUS.ON_HOLD) {
      return <div className="shipping-status-onhold">On Hold</div>
    } else if (status === SHIPPING_STATUS.ACCEPTED) {
      return <div className="shipping-status-accepted">Accepted</div>
    } else if (status === SHIPPING_STATUS.PROCESS) {
      return <div className="shipping-status-process">Process</div>
    } else if (status === SHIPPING_STATUS.DELIVERED) {
      return <div className="shipping-status-delivered">Delivered</div>
    }
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: onRenderShippingStatus,
    },
  ]

  const onLogoutHandler = () => {
    history.push(ROUTERS.LOGIN)
  }

  const onChangeShowLogout = () => {
    setShowLogout(!showLogout)
  }

  const onHideShowLogout = () => {
    showLogout && setShowLogout(!showLogout)
  }

  return (
    <DashboardComponent
      newOrders={newOrders}
      showLogout={showLogout}
      columns={columns}
      onHideShowLogout={onHideShowLogout}
      onChangeShowLogout={onChangeShowLogout}
      onLogoutHandler={onLogoutHandler}
    />
  )
}

export default Dashboard
