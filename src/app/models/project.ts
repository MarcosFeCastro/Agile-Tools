export interface Project {
    name: string;
    content?: string;
    createdAt: string;
    createdBy?: string;
    favorite: boolean;
    cards?: [{
        content: string;
        deadline?: string;
        status: string | "todo" | "doing" | "testing" | "done";
        color: string;
    }];
}