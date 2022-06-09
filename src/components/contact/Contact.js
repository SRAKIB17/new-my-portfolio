import React, { useRef } from 'react';
// import { contact } from '../data';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import mail from './mail.svg'
import call from './call.svg'
import location from './location.svg'
import sent from './send.svg'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then(function (response) {
                Swal.fire({
                    text: ` I get your email . I will contact you very soon`,
                    icon: 'success',
                    confirmButtonText: 'Thank you.'
                })
            }, function (error) {
                console.log('FAILED...', error);
            });
        e.target.reset()
    };

    const heightAutoHandle = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }



    return (

        <div className='p-5 bg-base-200 m-5 rounded-lg shadow-inner'>
            <h1 class="text-5xl text-center font-bold text-white">Contact Me!</h1>
            <div class="divider"></div>

            <div id='contact'>
                <div class="bg-base-200">
                    <div class="hero-content w-full flex-col lg:flex-row">
                        <div class="w-full md:w-[30%]">
                            <div className='p-2'>
                                <div className='flex'>
                                    <img src={mail} alt="" className='mr-2' />
                                    <h1 className='text-white text-xl md:text-2xl'>Have a question?</h1>
                                </div>
                                <div className='ml-4'>
                                    <h1 className='text-xl'>
                                        I am here to help.
                                    </h1>
                                    <span>
                                        Email me <br />
                                        <p className='text-orange-500'>at <a href="mailto:rakibul.islam.r608@gmail.com">rakibul.islam.r608@gmail.com</a></p>
                                    </span>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='flex'>
                                    <img src={call} alt="" className='mr-2' />
                                    <h1 className='text-white text-xl md:text-2xl'>Call</h1>
                                </div>
                                <div className='ml-4'>
                                    <h1 className='text-xl flex'>
                                         <p className='text-orange-500'><a href="tel:+8801873989651">Call me at  +8801873989651</a></p>
                                    </h1>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className='flex'>
                                    <img src={location} alt="" className='mr-2' />
                                    <h1 className='text-white text-xl md:text-2xl'>Current Location</h1>
                                </div>
                            </div>
                            <div>
                                <address className='text-orange-500 ml-4'>
                                    Mymensingh Sadar, Mymensingh – 2200
                                </address>
                            </div>
                        </div>
                        <div class=" w-full md:w-[70%]  shadow-2xl p-4 rounded-lg bg-base-100">
                            <form className=' w-full flex gap-2 md:gap-4 flex-col p-3'
                                ref={form} onSubmit={sendEmail}
                            >
                                <div class="w-full flex gap-2">
                                    <input className='input input-bordered w-full' name='from_name' type='text' placeholder='Your name' required />
                                    <input className='input input-bordered w-full' name='form_email' type='email' placeholder='Your email' required />
                                </div>

                                <div class="form-control">
                                    <input className='input input-bordered' type='text' name='subject' placeholder='Subject' required />
                                </div>
                                <div class="form-control">
                                    <textarea

                                        style={{ height: '100px' }}
                                        className='input input-bordered textareaHiddenScrollBar'
                                        name='message'
                                        placeholder='Your message'

                                        onChange={heightAutoHandle}
                                        onInput={heightAutoHandle}

                                        onCut={heightAutoHandle}
                                        onPaste={heightAutoHandle}
                                        onDrop={heightAutoHandle}
                                        onKeyDown={heightAutoHandle}
                                        onBlur={heightAutoHandle}
                                        onKeyUp={heightAutoHandle}
                                        required
                                    ></textarea>
                                </div>
                                <div class="mt-6">
                                    <button class="btn btn-primary flex">
                                        Send Message
                                        <img src={sent} alt="" className='p-2' />
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='subtitle'></p>
                </div>
                <div
                    className='flex flex-col lg:gap-x-8 lg:flex-row'
                >
                </div>
            </div>
        </div>

    );
};

export default Contact;
