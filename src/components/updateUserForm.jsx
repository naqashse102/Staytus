import React, { Fragment, useRef } from 'react'
import PropTypes from 'prop-types'

import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { updateSingleUser } from '../redux/features/stateManagements'

const UpdateUserForm = props => {

    const { open, setOpen = () => { }, user } = props;
    const { userId, firstName, lastName } = user;

    const dispatch = useDispatch();

    const cancelButtonRef = useRef(null);
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const updateUserHanlder = (event) => {
        event.preventDefault();
        if(userId) {
            dispatch(updateSingleUser({
                userId,
                firstName: firstNameRef?.current?.value || "",
                lastName: lastNameRef?.current?.value || "",
            }));
            onClose();
        }
    }

    const onClose = () => {
        setOpen({
            visible: false,
            user: {
                userId: '',
                firstName: '',
                lastName: '',
            }
        })
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <form onSubmit={updateUserHanlder}>
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                    Update User
                                                </Dialog.Title>
                                                <div className="mt-2">

                                                    <div className="grid grid-cols-4 gap-6 mt-4">
                                                        <div className="col-span-4 sm:col-span-4">
                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                First name
                                                            </label>
                                                            <input
                                                                ref={firstNameRef}
                                                                defaultValue={firstName}
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
                                                                defaultValue={lastName}
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"

                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={onClose}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

UpdateUserForm.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    user: PropTypes.shape({
        userId: PropTypes.string,
        firstName: PropTypes.string,
        lastname: PropTypes.string
    })
}

export default UpdateUserForm;