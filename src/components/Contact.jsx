// Remove the unused import statement for React
import Title from "./Title";
function Contact() {
  return (
    <div className="flex flex-col mx-auto mb-10 ">
      <div className="flex items-center justify-center">
        <form
          action="https://getform.io/f/9b5c6e78-2b77-4169-8204-6a6e52352262"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md dark:border-stone-400 focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="p-2 my-2 bg-transparent border-2 rounded-md dark:border-stone-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md dark:border-stone-400 focus:outline-none"
          />
          <button
            type="button"
            className="inline-block px-8 py-3 text-base font-medium text-center text-white rounded-md w-max bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
