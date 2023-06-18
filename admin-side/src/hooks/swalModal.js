import Swal from "sweetalert2";

export const showError = (error) => {
  let title = error.message;

  return Swal.fire({
    title: title,
    icon: "error",
    confirmButtonText: "Back",
  });
};
