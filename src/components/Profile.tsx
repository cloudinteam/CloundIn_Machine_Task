const Profile = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-8/12 overflow-hidden rounded-3xl bg-white shadow-2xl sm:flex justify-center">
                <div className="w-full">
                    <section className="py-8">
                        <div className="container mx-auto flex items-center">
                            <div className="flex-1 p-4">
                                {/* Left side (picture) */}
                                <img
                                    src="https://images2.alphacoders.com/123/1233878.jpg"
                                    alt="Elon Musk"
                                    className="w-full h-96 object-cover rounded"
                                />
                            </div>
                            <div className="flex-1 ml-4">
                                {/* Right side (name, age, date of birth) */}
                                <h2 className="text-3xl font-bold mb-2 text-gray-800">Elon Musk</h2>
                                <p className="text-gray-600 mb-2">Age: 50</p>
                                <p className="text-gray-600 mb-2">Born: June 28, 1971</p>

                                {/* Additional Details */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold mb-1">Current Position</h3>
                                    <p className="text-gray-800">CEO and Founder, SpaceX</p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold mb-1">Social Networks</h3>
                                    <div className="flex space-x-2">
                                        <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                                        <a href="https://www.instagram.com/elonmusk/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a>
                                        <a href="https://www.linkedin.com/company/spacex/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold mb-1">Brief Bio</h3>
                                    <p className="text-gray-800 p-2">
                                        Elon Musk is a visionary entrepreneur and business magnate known for his work in the technology and space industries. He is the founder, CEO, and lead designer at SpaceX, and also the CEO and product architect of Tesla, Inc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Profile;
