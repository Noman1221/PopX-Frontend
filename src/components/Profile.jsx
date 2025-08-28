import React, { useState } from 'react'

const Profile = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <div className='w-screen h-screen lg:flex justify-center'>
            <section className='border border-gray-300 bg-gray-100 lg:h-lvh h-screen lg:w-1/4 w-full'>
                <section className=''>
                    <h1 className='text-xl p-5 bg-white font-semibold text-neutral-700'>Account Settings</h1>
                    <div className='p-5 flex flex-wrap gap-5 my-5'>
                        <div className="flex flex-col">
                            <div className="relative w-32 h-32">
                                {/* Profile Image */}
                                <img
                                    src={image || "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}
                                    alt="profile"
                                    className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                                />

                                {/* Camera Button */}
                                <label
                                    htmlFor="fileInput"
                                    className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer shadow-md hover:bg-blue-600"
                                >
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clip-rule="evenodd" />
                                    </svg>

                                    <input
                                        id="fileInput"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 my-5'>
                            <h1 className='font-bold'>John Doe</h1>
                            <h3 className='text-neutral-500'>johndoe@email.com</h3>
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-semibold text-neutral-500 border-neutral-300 border-b-2 border-dashed px-5 pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem totam iste iusto magni libero reprehenderit eaque.</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Profile