export interface PollState extends PollFormState {
    id: number;
    result: number[];
    voted: boolean;
}

export interface PollFormState {
    question: string;
    options: string[];
    thumbnail: string;
}


export interface VoterState {
    id: number;
    voted: number[]
}
