import { notFound } from "next/navigation";

export const dynamicParams = true;

interface Params {
    id: number;
}

interface TicketDetailsProps {
    params: Params;
}

interface Ticket {
    id: number;
    title: string;
    body: string;
    priority: string;
    user_email: string;
}

async function generateStaticParams(): Promise<{ id: number }> {
    const res = await fetch('http://localhost:4000/tickets');
    const tickets: Ticket[] = await res.json();
    return tickets.map((ticket: Ticket) => ({ id: ticket.id }));
}

async function getTicket(id: number): Promise<Ticket> {

    await new Promise(resolve => setTimeout(resolve, 3000));

    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    });
    if (!res.ok) notFound();
    return res.json();
}

export default async function TicketDetails({ params }: TicketDetailsProps) {
    const ticket = await getTicket(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>{ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
        </main>
    )
}