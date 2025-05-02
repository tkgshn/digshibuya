import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    
    if (normalizedPath !== router.pathname) {
      router.push(normalizedPath);
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Head>
        <title>ページが見つかりません | DIGSHIBUYA</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">404 - ページが見つかりません</h1>
      <p className="mb-6">お探しのページは存在しないか、移動した可能性があります。</p>
      <button 
        onClick={() => router.push('/')}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        ホームに戻る
      </button>
    </div>
  );
}
