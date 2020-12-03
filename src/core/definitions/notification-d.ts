interface NotificationMessage {
    type: "info" | "success" | "warning" | "error" | "question";
    position: "top" | "top-start" | "top-end" | "center" | "center-start" |
    "center-end" | "bottom" | "bottom-start" | "bottom-end";
    title: string;
    text: string;
    html: string;
    hideAlert: boolean;
    showConfirmButton: boolean;
    showCancelButton: boolean;
    confirmButtonText: string;
    cancelButtonText: string;
    timer: number | null;
    resultFunction: (result: any) => void;
}