// Education.js


const Education = () => {
    return (
        <div className="p-6 rounded-2xl shadow-2xl w-8/12 mx-auto bg-white">

            {/* Each education entry */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Queen's University (Transfer)</h3>
                <p className="text-gray-600">Elon Musk briefly attended Queen's University in Kingston, Ontario, Canada, in 1989. However, <br /> he transferred to the University of Pennsylvania after completing his studies at Queen's</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">University of Pennsylvania</h3>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Bachelor of Science in Physics (BS)</h3>
                    <p className="text-gray-600">Musk attended the University of Pennsylvania, where he earned a Bachelor of Science degree in Physics from the College of Arts and Sciences.</p>
                    <p className="text-gray-600">Graduated: 1995</p>
                </div>

                <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Bachelor of Science in Economics (BS)</h3>
                    <p className="text-gray-600">Additionally, Musk pursued a second bachelor's degree, earning a Bachelor of Science in Economics from the Wharton School of Business.</p>
                    <p className="text-gray-600">Graduated: 1995</p>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Ph.D. Studies (Stanford University)</h3>
                <p className="text-gray-600">After completing his undergraduate studies, Elon Musk began Ph.D. studies at Stanford University in California</p>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Entrepreneurial Path</h3>
                <p className="text-gray-600">Elon Musk left his Ph.D. program at Stanford University after just two days to pursue entrepreneurial opportunities in the fields of technology and business</p>
            </div>
        </div>
    );
};

export default Education;
