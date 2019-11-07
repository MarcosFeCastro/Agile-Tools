export interface Note {
    title: string;
    content: string;
    color: string;
    tag?: string;
    createdAt: string;
    createdBy?: string;
    favorite: boolean;
}