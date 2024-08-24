interface Params {
    id: number;
}

interface TicketDetailsProps {
    params: Params;
}

export default function TicketDetails({ params }: TicketDetailsProps) {
    const id = params.id;
    return (
        <h1>Ticket Details - {id}</h1>
    )
}