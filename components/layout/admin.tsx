import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const AdminLayout = ({children}: LayoutProps) => {
  return (
    <div>
        Layout Admin
        {children}
    </div>
  )
}

export default AdminLayout