
export default function TitleType({ addClass, children, titleType }) {
    return (
        <>
            {
                titleType === 'h1' ?
                    <h1 className={`${addClass ? addClass : ''} text-xl lg:text-4xl font-secondary text-black`} >{children}</h1>
                    :
                    titleType === 'h2' ?
                        <h2 className={`${addClass ? addClass : ''} text-center text-xl lg:text-3xl font-secondary text-secondary font-bold mb-8`} >{children}</h2>
                        :
                        titleType === 'h3' ?
                            <h3 className={`${addClass ? addClass : ''} text-center text-xl lg:text-2xl font-secondary text-black font-bold`} >{children}</h3>
                            :
                            titleType === 'h4' ?
                                <h4 className={`${addClass ? addClass : ''} text-center text-lg lg:text-xl font-secondary text-black`} >{children}</h4>
                                :
                                <h5 className={`${addClass ? addClass : ''} text-center text-lg font-secondary text-black `} >{children}</h5>

            }
        </>
    )
}