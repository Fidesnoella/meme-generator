import { useState, useEffect } from 'react'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/39t1o.jpg"
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const { data } = await response.json()
            setAllMemes(data.memes)
        }
        getMemes()
    }, [])

    const getUrl = (() => {
        const getRandom = Math.floor(Math.random() * allMemes.length);
        const { url } = allMemes[getRandom]
        setMeme(prevMeme => ({ ...prevMeme, randomImage: url }))
    })

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({ ...prevMeme, [name]: value }))
    }

    return (
        <>
            <div className='mt-20  flex justify-center'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <input type="text" className='border border-[#D5D4D8] px-6 py-4 placeholder:text-gray-900 outline-none bg-white rounded-md' placeholder='Top text' name='topText' value={meme.topText} onChange={handleChange} />
                        <input type="text" className='border border-[#D5D4D8] px-6 py-4 placeholder:text-gray-900 outline-none bg-white rounded-md' placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange} />
                    </div>
                    <div className='cursor-pointer hover:underline text-lg text-white  font-medium bg-gradient-to-r from-[#672280] to-[#A626D3] w-full py-4 justify-center items-center flex rounded-md' onClick={getUrl}>Get a new meme image  🖼</div>
                </div>
            </div>
            <div className='flex justify-center py-10'>
                <div className='relative text-white max-w-sm'>
                    <img src={meme.randomImage} alt="" className='mx-auto bg-cover' />
                    <span className='absolute top-2 left-[40%] text-4xl font-semibold'>{meme.topText}</span>
                    <span className='absolute bottom-2 left-[40%] text-4xl font-semibold'>{meme.bottomText}</span>
                </div>
            </div>
        </>
    )
}