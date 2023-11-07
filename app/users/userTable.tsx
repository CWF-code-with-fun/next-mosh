import Link from 'next/link';
import React from 'react'
interface User{
    name: string;
    email:string;
    id: string;
}
interface UserTableProps{
    sortBy?:string;
}
const UserTable = async ({sortBy}:UserTableProps) => {
    const res= await fetch('https://jsonplaceholder.typicode.com/usersss');
    const users :User[]= await res.json();
    const sortedUsers= sortBy==='name'? users.sort((a,b) =>b.name.localeCompare(a.name)):users.sort((a,b) =>b.email.localeCompare(a.email));
    // const sortedUsers = users;
    console.log("sorted users",sortedUsers);
    
    return (
    <table>
        <thead>
            <tr>
                <th><Link href='/users?sortOrder=name'>Name</Link></th>
                <th><Link href='/users?sortOrder=email'>Email</Link></th>
            </tr>
        </thead>
        <tbody>
        {
        sortedUsers.map((user) =><tr key={user.id+user.name}>
        <td>
        {user.name}
        </td>
        <td>{user.email}</td>
    </tr>)
        }
            
        </tbody>
        
    </table>
  )
}

export default UserTable