import { toast } from "react-toastify";

const protectedHandler =
  (fn) =>
  async (...args) => {
    const fnReturn = fn(...args);
    try {
      await Promise.resolve(fnReturn);
    } catch (err) {
      if (err.status === 401) {
        console.log(err);
      } else {
        toast.error(err.data?.message, { toastId: err.data?.message });
      }
    }
  };

export default protectedHandler;
