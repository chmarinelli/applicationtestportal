import Swal from 'sweetalert2';

export default (notificationMessage: Partial<NotificationMessage>) => {
    console.log(notificationMessage.timer);
    Swal.fire({
        position: notificationMessage.type !== "success" ? "center" : notificationMessage.position || "top-right",
        type: notificationMessage.type,
        title: notificationMessage.title,
        text: notificationMessage.text,
        html: notificationMessage.html,
        showConfirmButton: notificationMessage.type !== "success" || notificationMessage.showConfirmButton,
        confirmButtonText: notificationMessage.confirmButtonText || "Entendido",
        showCancelButton: notificationMessage.showCancelButton,
        cancelButtonText: notificationMessage.cancelButtonText || "Cancelar",
        timer: notificationMessage.showConfirmButton || notificationMessage.type !== "success" ? 0 : notificationMessage.timer || 2000,
        cancelButtonColor: "#d33"
    }).then((result) => {
        if (notificationMessage.resultFunction)
            notificationMessage.resultFunction(result);
    });
}