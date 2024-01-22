import { FC } from 'react';

interface AchievementCardProps {
    achievement: string;
}

const AchievementCard: FC<AchievementCardProps> = ({ achievement }) => {
    return (
        <div className="flex flex-wrap rounded-3xl overflow-hidden bg-white shadow-2xl justify-center" style={{ minWidth: '200px', maxWidth: '300px' }}>
            <div className="p-4 mb-4">
                <p className="text-gray-800">{achievement}</p>
            </div>
        </div>
    );
};

export default AchievementCard;
