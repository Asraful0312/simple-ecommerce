import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // const [state, handleSubmit] = useForm("https://formspree.io/f/mayrzzby");

  // if (state.succeeded) {
  //   return <p>Thanks for your submission!</p>;
  // }
  return (
    <div className="py-16">
      <h2 className="text-4xl text-center text-gray-900 mb-6">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.732309648904!2d91.22173537997755!3d22.98948827074391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37535fddee3f7037%3A0x76b61d5eecc72515!2sSenbag!5e0!3m2!1sen!2sbd!4v1716897201121!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form
        className="mt-20 max-w-xl px-5 w-full flex items-start flex-col gap-6 mx-auto"
        action="https://formspree.io/f/mayrzzby"
        method="POST"
      >
        <Input
          className="w-full focus:border-primary"
          type="text"
          name="username"
          placeholder="John Doe"
          required
          autoComplete="off"
        />
        <Input
          className="focus:border-primary"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
          autoComplete="off"
        />
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <Textarea
          className="focus:border-primary"
          name="message"
          placeholder="Enter your message"
          required
          autoComplete="off"
          autoCorrect="on"
          rows={10}
        />
        {/* <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <Button className="flex-start disabled:bg-primary/70" type="submit">
          Submit
        </Button>
        {/* <ValidationError errors={state.errors} /> */}
      </form>
    </div>
  );
};

export default Contact;
