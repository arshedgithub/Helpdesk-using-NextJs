'use client'

// import { useRouter } from "next/router";
import { useState } from "react";

enum Priority {
    Low = 'low',
    Medium = 'medium',
    High = 'high',
}

export default function CreateForm() {
    // const router = useRouter();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState(Priority.Low);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <form className="w-1/2">
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