import Head from 'next/head';

export default function Blog() {
    return (
        <main className="p-6 font-sans">
            <Head>
                <title>Blog - Adriana Xavier Legal Services</title>
            </Head>
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p className="text-gray-700">
                {/* Aqui você pode listar os posts do blog ou inserir conteúdo dinâmico futuramente */}
                Em breve, novidades e artigos sobre temas jurídicos.
            </p>
        </main>
    );
}
