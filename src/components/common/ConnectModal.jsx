import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ConnectModal({
  isOpenConnectModal,
  toggleModal,
  bEmail,
  setBEmail,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    fullname: "",
    name: "",
    email: "",
  });

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    //convert form values to form data
    const formData = new FormData();
    formData.append("Full Name", formValues.fullname);
    formData.append("Comany Name", formValues.name);
    formData.append("Company Email", formValues.email);
    formData.append("access_key", "905a3720-8d15-4ca6-b1d6-a24c142db9b5");

    //set isSubmitting to true
    setIsSubmitting(true);
    //send form data to the server
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      toast.success("Thank you! Someone shall be in touch with you shortly");
      //reset form values
      setFormValues({
        fullname: "",
        name: "",
        email: "",
      });
      setBEmail("");
      e.target.reset();
      setIsSubmitting(false);
      //close the modal
      toggleModal();
    } else {
      toast.error("Error submitting form");
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpenConnectModal) {
      // Set the modal as visible after a short delay to start the animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      // Set the modal as not visible to start the closing animation
      setIsVisible(false);
    }

    setFormValues({
      fullname: "",
      name: "",
      email: bEmail,
    });
  }, [isOpenConnectModal, bEmail]);

  return (
    <div className="absolute w-full">
      {isOpenConnectModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            isVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            onClick={toggleModal}
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Modal Content */}
          <div
            className={`bg-white relative  md:rounded-[25px] rounded-[20px] overflow-hidden shadow-lg transform transition-transform duration-300 max-w-[1170px] w-[90%] ${
              isVisible ? "scale-100" : "scale-75"
            }`}
          >
            <div className="flex xl:items-start justify-between  relative">
              <div className="w-[45%] h-full hidden md:block">
                <img src="assets/images/modal.svg" alt="" />
              </div>

              <div className="flex-1 pt-[20px] lg:pt-[50px] md:pt-[30px] md:px-5 p-8 md:p-0">
              <h2 className="text-left text-[#060359] dm-sans-font text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-[125%] max-w-[485px] mx-auto">
                  Get Your Free Consult
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-[20px] lg:mt-[57px] md:max-w-[75%]"
                >
                  <div className="border-b border-black ">
                    <h5 className="text-black text-[14px] md:text-[16px] font-medium dm-sans-font">
                      Full Name<span className="text-[#FF2525]">*</span>
                    </h5>

                    <input
                      required
                      type="text"
                      name="fullname"
                      id=""
                      onChange={(e) =>
                        setFormValues({ ...formValues, fullname: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="text-black placeholder:text-[#A8A8A8] dm-sans-font leading-[142%] font-medium text-[14px] w-full bg-transparent border-none outline-none md:py-[10px] py-1"
                    />
                  </div>
                  <div className="border-b border-black my-[20px] lg:my-[46px]">
                    <h5 className="text-black text-[14px] md:text-[16px] font-medium dm-sans-font">
                      Company Name<span className="text-[#FF2525]">*</span>
                    </h5>

                    <input
                      required
                      type="text"
                      name="name"
                      id=""
                      onChange={(e) =>
                        setFormValues({ ...formValues, name: e.target.value })
                      }
                      placeholder="Enter your company name"
                      className="text-black placeholder:text-[#A8A8A8] dm-sans-font leading-[142%] font-medium text-[14px] w-full bg-transparent border-none outline-none md:py-[10px] py-1"
                    />
                  </div>
                  <div className="border-b border-black my-[20px] lg:my-[46px]">
                    <h5 className="text-black text-[14px] md:text-[16px] font-medium dm-sans-font">
                      Company Email Address
                      <span className="text-[#FF2525]">*</span>
                    </h5>

                    <input
                      onChange={(e) =>
                        setFormValues({ ...formValues, email: e.target.value })
                      }
                      required
                      type="email"
                      name="email"
                      value={formValues.email}
                      placeholder="abc@company.com"
                      className="text-black placeholder:text-[#A8A8A8] dm-sans-font leading-[142%] font-medium text-[14px] w-full bg-transparent border-none outline-none md:py-[10px] py-1"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="btn"
                    // onClick={toggleModal}
                    className="text-white text-[15px] font-bold tracking-[0.32px] leading-[14px] py-[12px] px-[40px] rounded-[100px] bg-[#B30753] hover:bg-[#060359]  transition-all duration-300 ease-linear border border-[#060359] hover:border-[#B30753] plus-jakarta-sans-font"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>

            <div className="connect-bg-shape absolute w-[20%] h-[50%] lg:w-[146px] lg:h-[386px] bottom-[24px] right-[29px]" />
          </div>
        </div>
      )}
    </div>
  );
}
