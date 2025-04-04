import LoadingSpinner from '@/utils/LoadingSpinner';
import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="loading">
           <LoadingSpinner />
        </div>
    );
};

export default Loading;