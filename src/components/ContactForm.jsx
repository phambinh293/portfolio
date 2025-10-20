import { useForm } from "react-hook-form";
import { useState } from "react";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useModalAlert } from "../contants/useModalAlert";
import ModalAlert from "./ModalAlert ";
import { useCursor } from "./CustomCursor";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { modalState, showAlert, closeAlert } = useModalAlert();
  const { setCursorActive, setCursorText } = useCursor();

  const initalValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const ContactFormSchema = Z.object({
    name: Z.string().min(1, "Name is required"), // nonempty() đã deprecated
    email: Z.string().email("Invalid Email").min(1, "Email is required"),
    subject: Z.string().min(1, "Subject is required"),
    message: Z.string().min(1, "Message is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initalValues,
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        title: data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toDateString(),
      };

      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, { publicKey: userID });

      // Hiển thị modal thành công
      showAlert({
        type: "success",
        title: "Gửi thành công!",
        message:
          "Tin nhắn của bạn đã được gửi. Tôi sẽ phản hồi sớm nhất có thể.",
        confirmText: "Đóng",
      });

      reset(); // Clear form sau khi gửi thành công
    } catch (error) {
      console.log("Failed:", error);

      // Hiển thị modal lỗi
      showAlert({
        type: "error",
        title: "Gửi thất bại!",
        message: "Không thể gửi tin nhắn. Vui lòng thử lại sau.",
        confirmText: "Thử lại",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-[#a7a7a7] flex flex-col gap-7 md:mt-0 mt-10"
      >
        <div>
          <label className="label cursor-none" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="Your name ..."
            className="input cursor-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>

        <div>
          <label className="label cursor-none" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Email ..."
            className="input cursor-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        <div>
          <label className="label cursor-none" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            {...register("subject")}
            id="subject"
            placeholder="Subject ..."
            className="input cursor-none"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.subject.message}
            </span>
          )}
        </div>

        <div>
          <label className="label cursor-none" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Message ..."
            rows={5}
            className="input resize-none cursor-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="cursor-none w-full py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          onMouseEnter={() => {
            {
              setCursorActive(true), setCursorText("📤");
            }
          }}
          onMouseLeave={() => {
            setCursorActive(false), setCursorText("");
          }}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send message"
          )}
        </button>
      </form>
      <ModalAlert
        isOpen={modalState.isOpen}
        onClose={closeAlert}
        {...modalState}
      />
    </>
  );
};

export default ContactForm;
