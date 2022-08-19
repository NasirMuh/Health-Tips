import React from 'react'
const ItemCate = ({ itemss }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Your Favirate Dish</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">All Dishes are very helpful our health.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {
                            itemss.map((curValue) => {
                                const { id, name, category, description } = curValue;
                                return (
                                    <div key={id} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-1 rounded-lg">
                                            <div className="flex-grow ml-2">
                                                <h2 className="text-gray-900 title-font font-medium">{name}</h2>
                                                <p className="text-gray-500">{category}</p>
                                                <p className="text-gray-500">{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default ItemCate