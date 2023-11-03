import Link from 'next/link';

const Navigation = () => {
    return (
        <nav>
            <Link href="/">Login</Link>
            <Link href="/trelloBoard">Trello Board</Link>
        </nav>
    );
}

export default Navigation