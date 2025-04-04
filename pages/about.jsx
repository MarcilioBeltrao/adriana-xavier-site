import Head from 'next/head';

export default function About() {
    return (
        <main className="p-6 font-sans">
            <Head>
                <title>About - Adriana Xavier Legal Services</title>
                <meta name="description" content="Learn more about Adriana Xavier Legal Services." />
            </Head>
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700">
                {/* Insira aqui o conteúdo que descreva a história, missão ou visão da firma */}
                Adriana Xavier Legal Services is dedicated to providing top-notch legal assistance...
            </p>
        </main>
    );
}
