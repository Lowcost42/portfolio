import React from 'react'

const achievmentsList = [
    {
        metric: "Projets",
        value: "3+"
    },
    {
        metric: "Années",
        value: "3+"
    },
]

const AchievmentSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex_row items-center justifu-between'>
                {achievmentsList.map((achievment, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col items center justify-center mx-4'
                        >
                            <h2 className='text-white text-4xl font-bold'>
                                {achievment.value}
                            </h2>
                            <p className='text-[#ADB7BE] text-base'>
                                {achievment.metric}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default AchievmentSection