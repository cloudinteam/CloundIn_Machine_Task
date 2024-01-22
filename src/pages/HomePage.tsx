import Profile from '../components/Profile'
import AchievementsList from '../components/Achivements'
import Education from '../components/Educations';


function HomePage() {

    const elonMuskAchievements = [
        "Founded SpaceX (Space Exploration Technologies Corp.) in 2002 with the goal of reducing space transportation costs and making space exploration possible for humans.",
        "Co-founded Tesla, Inc. in 2003 with the mission to accelerate the world's transition to sustainable energy.",
        "Led the development of electric vehicles, including the Tesla Roadster, Model S, Model 3, Model X, and Model Y.",
        "Founded The Boring Company with the vision of reducing traffic congestion through underground transportation tunnels.",
        "Co-founded Neuralink in 2016, aiming to develop brain–computer interface technologies to enable direct communication between the human brain and computers.",
        "Co-founded OpenAI in 2015, an artificial intelligence research laboratory focused on developing safe and beneficial AI.",
        "Established Gigafactories for the production of batteries and electric vehicles, contributing to the global transition to sustainable energy.",
        "Announced plans for the colonization of Mars, expressing a long-term vision for human settlement on the Red Planet.",
    ];


    return (
        <div className='bg-blue-50 w-full'>
            <Profile />

            <h1 className="text-5xl mb-10 font-bold text-center">Achievements</h1>
            <div className="mb-4 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {elonMuskAchievements.map((achievement, index) => (
                    <AchievementsList key={index} achievement={achievement} />
                ))}
            </div>

            <h1 className="text-5xl mb-10 font-bold text-center">Education</h1>

            <Education />
        </div>
    )
}

export default HomePage