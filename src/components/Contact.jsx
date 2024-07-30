import React from 'react'
// import emailjs from '@emailjs/browser';


const Contact = () => {

    // let [sucess, setsucess] = useState("")
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();




    //     emailjs
    //         .sendForm('service_nerhfpt', 'template_1jkdnte', form.current, {
    //             publicKey: 'tT0ae4b0HjUffLjAJ',
    //         })
    //         .then(
    //             () => {

    //                 setsucess("Email send sucess fully")
    //                 form.current.reset();


    //             },
    //             (error) => {
    //                 console.log('FAILED...', error.text);
    //             },
    //         );
    // };
    return (
        <form >
            <div className=' text-white max-w-7xl mx-auto pb-20'>
                <h1 className=' text-6xl text-white font-semibold text-center py-24 font-Sevillana'>Contact</h1>
                <div className=' flex flex-col gap-5 pr-80 pl-28 '>
                    <label htmlFor='text' className=' text-xl font-Rampart'> Name</label>
                    <input id='text' placeholder='Name' type="text" className=' py-3 rounded-md text-black px-3  font-semibold outline-none border-green-500' />
                    <label htmlFor='emai' className=' text-xl font-Rampart'> Enter Your Email</label>
                    <input id='emai' placeholder='Enter Youe Email' type="text" className=' py-3 rounded-md text-black px-3  font-semibold outline-none border-green-500' />
                    <label htmlFor='summry' className=' text-xl font-Rampart'> Enter Your Message</label>

                    <textarea placeholder='Enter Your Message' name="" rows={6} id="summery" className=' py-3 rounded-md text-black px-3  font-semibold outline-none border-green-500'></textarea>



                    <button
                        // onClick={sendEmail}
                        type="submit"
                        className=' w-full bg-purple-800  rounded-md py-3 hover:bg-purple-950 text-lg font-semibold'
                    >
                        Submit
                    </button>

                </div>
            </div>
        </form>
    )
}

export default Contact