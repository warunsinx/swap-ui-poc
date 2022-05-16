import localService from "../services/local.service";

export const requestWindow = (
  newWindow: Window,
  url: string,
  resultKey?: string,
  errorKey?: string
) => {
  return new Promise((resolve, reject) => {
    // const newWindow = window.open(
    //   url,
    //   "_blank",
    //   `toolbar=no,
    //     location=no,
    //     status=no,
    //     menubar=no,
    //     scrollbars=yes,
    //     resizable=yes,
    //     width=400px,
    //     height=600px`
    // );
    // const newWindow = window.open(url);

    newWindow.location.href = url;

    const iv = setInterval(() => {
      const isClosed = newWindow.closed;

      if (isClosed) {
        if (!resultKey) resolve(true);
        else {
          const result = localService.getItem(resultKey);
          const error = localService.getItem(errorKey as any);

          if (result) {
            resolve(result);
          } else if (error) {
            reject(error);
          } else {
            reject("unexpected error");
          }
        }
        clearInterval(iv);
      }
    }, 500);
  });
};
