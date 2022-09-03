import React, { useEffect, useState } from 'react'
import PlanetListItem from '../components/planetListItem';

import {fetchPlanets} from '../util/planets';

const PromiseComponent = (props) => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        fetchPlanetHandler()
    }, [])
    
    const fetchPlanetHandler = async () => {
        const [pErr, pRes] = await fetchPlanets(1, 1);

        if(pRes) {
            setPlanets(pRes);
        }

        console.log('planets', pErr, pRes)
    }

    return (
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                    <div className="p-3 rounded-lg border-4 border-dashed border-gray-200">
                        <div className="mt-10 sm:mt-0">
                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                <div className="mt-5 md:col-span-3 md:mt-0">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-4 sm:col-span-4">
                                                <p className='mt-2 text-sm font-semibold'>Name</p>
                                            </div>
                                            <div className="col-span-4 sm:col-span-4">
                                                <p className='mt-2 text-sm font-semibold'>Population</p>
                                            </div>
                                            <div className="col-span-4 sm:col-span-4">
                                                <p className='mt-2 text-sm font-semibold'>URL</p>
                                            </div>
                                           


                                        </div>
                                        {
                                            planets && planets.length > 0 ? planets.map((planet, idx) => {
                                                return <div className="grid grid-cols-12 gap-6 my-4" key={`planet-${idx}`}>
                                                    <div className="col-span-4 sm:col-span-4">
                                                        <p className='mt-2 text-sm text-gray-500'>{planet.name}</p>
                                                    </div>
                                                    <div className="col-span-4 sm:col-span-4">
                                                        <p className='mt-2 text-sm text-gray-500'>{planet.population}</p>
                                                    </div>
                                                    <div className="col-span-4 sm:col-span-4">
                                                        <p className='mt-2 text-sm text-gray-500'>{planet.url}</p>
                                                    </div>
                                                </div>
                                            }) :
                                                <p className='mt-5 text-sm text-gray-500 text-center'>No Planet Found</p>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /End replace */}
                <PlanetListItem />
            </div>
        </main>
    )
}

PromiseComponent.propTypes = {}
export default PromiseComponent