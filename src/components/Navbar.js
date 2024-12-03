import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center space-x-6">
                <li>
                    <Link href="/"className="hover:text-blue-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-400">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/blog/1" className="hover:text-blue-400">
                        Blog 1
                    </Link>
                </li>
                <li>
                    <Link href="/blog/2" className="hover:text-blue-400" >
                        Blog 2
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

