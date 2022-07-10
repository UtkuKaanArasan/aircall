import { createContext } from "react";

export interface Calls {
    call_type: string;
    created_at: string;
    direction: string;
    duration: number;
    from: string;
    id: string;
    is_archived: boolean;
    notes: object[];
    to: string;
    via: string;
}

export const CallContext = createContext<Calls[]>([]);
