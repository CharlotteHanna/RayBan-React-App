import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-evenly gap-10 items-center max-lg:flex-col"
    id="contact-us">
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">Sign up for 
        <span className="text-red-600"> Updates </span>& Newsletter</h3>
        <div className="lg:max-w-[40%] w-full flex items-center 
        max-sm:flex-col p-2.5 gap-5 sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@rayban.com" className="input" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth/>
          </div>
        </div>
    </section>
  )
}

export default Subscribe