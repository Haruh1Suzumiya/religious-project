import { useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-medium text-gray-900 mb-4">
          申し訳ありません
        </h1>
        <p className="text-gray-600 mb-4">
          予期せぬエラーが発生しました。
        </p>
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
        >
          トップページに戻る
        </a>
      </div>
    </div>
  );
};