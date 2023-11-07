import React, { cache } from 'react'
import UserTable from './userTable';

interface UsersProps{
  params:{
    id:string;
  }
}

const Users =  ({params:{id}}:UsersProps) => {


  return (
    <div>
      users
      <UserTable />
        </div>
  )
}

export default Users;