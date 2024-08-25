import Link from "next/link";

export default function NotFound(){
    return (
        <main className="text-center">
            <h2 className="text-3xl">Hit a brick wall</h2>
            <p>Could not find the ticket you are looking for</p>
            <p>Go back to <Link href="/tickets">All Tickets</Link></p>
        </main>
    )
}