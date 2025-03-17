import { useForm } from "react-hook-form";
import axios from "axios";

const PostEmail = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/submit",
        data
      );
      console.log("Success:", response.data);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-black text-white   ">
      <div className="w-[90%]  mx-auto flex flex-col lg:flex-row items-center pt-24 pb-24 gap-6">
        {/* Left Side Content */}
        <div className=" mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-light">
            Speak to one of our experts to learn how we can help you take your
            business to the next level.
          </h2>
          <button className="mt-6 border border-white rounded-full w-12 h-12 flex items-center justify-center">
            ➜
          </button>
        </div>

        {/* Right Side Form */}
        <div className=" bg-black  rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-xl mb-1">First Name</label>
                <input
                  {...register("firstName")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white  rounded-md w-full"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-xl mb-1">Last Name</label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>

              {/* Job Title */}
              <div className="flex flex-col">
                <label className="text-xl mb-1">Job Title</label>
                <input
                  {...register("jobTitle")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label className="text-xl mb-1">Company</label>
                <input
                  {...register("company")}
                  type="text"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-xl mb-1">E-mail Address</label>
                <input
                  {...register("email")}
                  type="email"
                  className="p-4 focus:outline-none bg-gray-800 text-white rounded-md w-full"
                />
              </div>
            </div>

            <div className="flex justify-between gap-10">
              {/* Disclaimer */}
              <p className="text-xs text-gray-400 mt-6">
                By pressing subscribe you agree to receive newsletters,
                exclusive personalised events invitations and carefully-curated
                offers from WSD by Email. You can unsubscribe at any time.
              </p>
              <button
                type="submit"
                className="mt-6 border border-white rounded-full w-12 h-12 flex items-center justify-center aspect-square"
              >
                ➜
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEmail;
