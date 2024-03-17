
export default function TitleType({ addClass, children, titleType }) {
    return (
        <>
            {
                titleType === 'h1' ?
                    <h1 className={`text-xl lg:text-4xl font-secondary text-black ${addClass}`} >{children}</h1>
                    :
                    titleType === 'h2' ?
                        <h2 className={`text-center text-xl lg:text-3xl font-secondary text-secondary font-bold mb-8 ${addClass}`} >{children}</h2>
                        :
                        titleType === 'h3' ?
                            <h3 className={`text-center text-xl lg:text-2xl font-secondary text-black font-bold ${addClass}`} >{children}</h3>
                            :
                            titleType === 'h4' ?
                                <h4 className={`text-center text-lg lg:text-xl font-secondary text-black ${addClass}`} >{children}</h4>
                                :
                                titleType === 'h5' ?
                                    <h5 className={`text-center text-lg font-secondary text-black ${addClass}`} >{children}</h5>
                                    :
                                    <p></p>
            }
        </>
    )
}