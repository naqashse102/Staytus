import React from 'react'
import PropTypes from 'prop-types'

import { GlobeEuropeAfricaIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const PlanetListItem = props => {

    return (
        <ul className='planet-list'>
            <li className='planet-list-item'>
                <div className="md:grid md:grid-cols-4 md:gap-2">
                    <div className="col-span-3 sm:col-span-3">
                        <div className='item-details'>
                            <span className='heading'>Planet Created</span>
                            <div className='content'>
                                <GlobeEuropeAfricaIcon className="h-6 w-6 p-icon" aria-hidden="true" />
                                <div>
                                    <span className='p-name'>Planet Name</span>
                                    <ul className='p-film-list'>
                                        <li>
                                            <span>Film Name 1</span>
                                        </li>
                                        <li>
                                            <span>Film Name 2</span>
                                        </li>
                                        <li>
                                            <span>Film Name 3</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-1">
                        <div className='p-stamp-container'>
                            <div className='p-timestamp'>
                                <span className='date-create'>Planet Created</span>
                                <span className='p-climate'>planet.climate</span>
                            </div>
                            <ChevronDownIcon className="h-6 w-6 p-icon" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

PlanetListItem.propTypes = {}

export default PlanetListItem