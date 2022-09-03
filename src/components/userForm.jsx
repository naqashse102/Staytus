import React, { useRef, useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { update } from "../redux/features/stateManagements"

const UserForm = (props) => {

    const dispatch = useDispatch();

    const [users, setUsers] = useState([]);

    const userIdRef = useRef(null)
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    useEffect(() => {
        if (users.length > 0)
            dispatch(update(users));
    }, [users]);

    const onSubmitHandler = (event) => {
        const user = { userId: '', firstName: '', lastName: '' }
        event.preventDefault();

        user.userId = userIdRef?.current?.value || ""
        user.firstName = firstNameRef?.current?.value || ""
        user.lastName = lastNameRef?.current?.value || ""

        const didExist = users.find(u => u.userId === user.userId);
        if (didExist) {
            event.target.reset();
            return;
        }

        setUsers(prev => {
            return [...prev, user]
        })
        event.target.reset();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-4 sm:col-span-4">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                User Id
                            </label>
                            <input
                                ref={userIdRef}
                                required={true}
                                type="text"
                                name="ser-id"
                                id="user-id"
                                autoComplete="user-id"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="col-span-4 sm:col-span-4">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                ref={firstNameRef}

                                required={true}
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="col-span-4 sm:col-span-4">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                ref={lastNameRef}

                                required={true}
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default UserForm