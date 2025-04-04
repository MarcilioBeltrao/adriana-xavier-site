// components/ServiceCard.jsx
import Link from 'next/link';

export default function ServiceCard({ title, description, imageUrl, link }) {
    return (
        <Link href={link}>
            <div className="cursor-pointer bg-white rounded shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-700 text-sm">{description}</p>
                </div>
            </div>
        </Link>
    );
}
