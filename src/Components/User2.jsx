import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const User2 = () => {

     const {isPending, isError, error, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/user');
            return res.json();
        }
     })

    // const [users, setUsers] = useState([]);

    // useEffect( () => {
    //     fetch('http://localhost:5000/user')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // },[])

    const handleDelete = id => {
        // make sure user is confirmed to delete
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully');
            }
        })
    }

    if(isPending) {
        return <span className="loading loading-spinner text-error"></span>
    }

    if(isError) {
        return <p>{error.message}</p>
    }


    return (
        <div>
            {/* <h2>Users:{loadedUsers.length} </h2> */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last logged in</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => 
                            <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td></td>
                                <td>
                                    <button
                                     onClick={() => handleDelete(user._id)} 
                                     className="btn">X</button>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User2;