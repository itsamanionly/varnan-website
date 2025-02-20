import React from 'react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal'
import Image from 'next/image'

export const Video = () => {
    return (
        <section className='flex items-center justify-center'>
            <Modal>
                <ModalTrigger className=" bg-white group text-black flex justify-center  group/modal-btn">
                    <div className='relative'>
                        <Image src="https://tierly.app/landing/tierly_hero_light.png" width={1000} height={1000} className='w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-lg shadow-lg border' alt="ai" />
                        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
                            <div className='bg-[#18181b]/10 flex items-center justify-center rounded-full backdrop-blur-md size-28'>
                                <div className='flex items-center justify-center bg-gradient-to-b from-[#18181b]/30 to-[#18181b] shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-play size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                                        style={{
                                            filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
                                        }}
                                    >
                                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalTrigger>
                <ModalBody className='bg-trasparent border-none aspect-video '>
                    <ModalContent className='bg-trasparent p-0 md:p-0 aspect-video  '>
                        <div className='p-2 rounded-lg bg-white/90'>
                            <video autoPlay muted loop className='w-full h-full rounded-lg' controls>
                                <source src="/test.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </section>
    )
}
