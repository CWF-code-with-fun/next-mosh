import React, { cache } from 'react'
import UserTable from '../userTable';
import { Metadata } from 'next';

interface Props{
    params:{
      id:number;
    }
    searchParams:{
      sortOrder:string;
    };
}

export const metadata: Metadata = {
  title: 'Invoices',
};

const User =  ({params:{id},searchParams:{sortOrder}}:Props) => {


  return (
    <div>
      user id :{id}
      <UserTable sortBy={sortOrder}/>
        </div>
  )
}

export default User;