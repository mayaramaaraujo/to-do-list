export interface Error {
    status: number | null,
    data: ErrorMessage
}

export interface ErrorMessage {
    message: string,
    reason: string
}