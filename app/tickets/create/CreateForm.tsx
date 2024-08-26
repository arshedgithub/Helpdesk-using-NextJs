'use client'

import { Ticket } from "@/app/interface/Ticket";
import { useRouter } from "next/navigation";
import { useState } from "react";

enum Priority {
    Low = 'low',
    Medium = 'medium',
    High = 'high',
}

export default function CreateForm() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState(Priority.Low);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const ticket: Ticket = {
            id: 4, title, body, priority, user_email: 'arshed@gmail.com'
        }

        const res = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticket),
        });

        if (res.status === 201) {
            router.refresh();         // cache refresh
            router.push('/tickets')
        } 
    }

    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Title : </span>
                <input
                    required
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title} />
            </label>
            <label>
                <span>Title : </span>
                <textarea
                    required
                    onChange={e => setBody(e.target.value)}
                    value={body} />
            </label>
            <label>
                <span>Title : </span>
                <select
                    onChange={e => setPriority(e.target.value as Priority)}
                    value={priority} >
                    <option value={Priority.Low}>Low</option>
                    <option value={Priority.Medium}>Medium</option>
                    <option value={Priority.High}>High</option>
                </select>
            </label>
            <button className="btn-primary" disabled={isLoading}>
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}