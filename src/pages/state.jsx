import React from 'react'
import UserForm from '../components/userForm'
import UsersTable from '../components/usersTable'

const State = () => {
    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="p-3 rounded-lg border-4 border-dashed border-gray-200">
                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="mt-5 md:col-span-3 md:mt-0">
                                    <UserForm />
                                </div>
                            </div>
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="mt-5 md:col-span-3 md:mt-0">
                                    <UsersTable />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /End replace */}
            </div>
        </main>
    )
}


export default State