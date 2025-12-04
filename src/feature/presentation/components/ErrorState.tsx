import React from 'react';

interface ErrorStateProps {
    error: string;
    onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => (
    <div className="text-center py-12">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold mb-2">حدث خطأ</h3>
        <p className="text-gray-500 mb-4">{error}</p>
        <button
            onClick={onRetry}
            className="bg-main text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
            حاول مرة أخرى
        </button>
    </div>
);

export default ErrorState;