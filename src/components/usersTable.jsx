import React, { useState } from 'react'

import { useSelector } from 'react-redux';
import UpdateUserForm from './updateUserForm';

const UsersTable = (props) => {

    const users = useSelector(state => state.state.users);
    const [updateForm, setUpdateForm] = useState({
        visible: false, user: {
            userId: '',
            firstName: '',
            lastName: '',
        }
    });

    const showUpdateFormHandler = (user) => {
        setUpdateForm(prev => {
            prev.visible = true;
            prev.user = user;
            return { ...prev };
        })
    }

    return (
        <>
            <div className="bg-white px-4 py-5 sm:p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                    Users List
                </h3>
            </div>
            <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3 sm:col-span-3">
                        <p className='mt-2 text-sm font-semibold'>User ID</p>
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <p className='mt-2 text-sm font-semibold'>First Name</p>
                    </div>
                    <div className="col-span-3 sm:col-span-3">
                        <p className='mt-2 text-sm font-semibold'>Last Name</p>
                    </div>
                    <div className="col-span-3 sm:col-span-3 ">
                        <p className='mt-2 text-sm font-semibold text-center'>Actions</p>
                    </div>


                </div>
                {
                    users && users.length > 0 ? users.map((user, idx) => {
                        return <div className="grid grid-cols-12 gap-6 my-4" key={`user-${idx}`}>
                            <div className="col-span-3 sm:col-span-3">
                                <p className='mt-2 text-sm text-gray-500'>{user.userId}</p>
                            </div>
                            <div className="col-span-3 sm:col-span-3">
                                <p className='mt-2 text-sm text-gray-500'>{user.firstName}</p>
                            </div>
                            <div className="col-span-3 sm:col-span-3">
                                <p className='mt-2 text-sm text-gray-500'>{user.lastName}</p>
                            </div>
                            <div className="col-span-3 sm:col-span-3 text-center">
                                <button
                                    onClick={() => showUpdateFormHandler(user)}
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    }) :
                        <p className='mt-5 text-sm text-gray-500 text-center'>No Users Found</p>
                }
                 <UpdateUserForm open={updateForm.visible} user={updateForm.user} setOpen={setUpdateForm} />
            </div>
        </>

    )
}

export default UsersTable