import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";

const page = () => {
    return (
        <main className="flex items-center justify-center h-screen flex-col ">
            <Logo headerClass="text-3xl" imageClass="w-16" />

            <form action="/register" method="post" className="w-[400px]">
                <div className="flex flex-col my-5">
                    <label htmlFor="first_name" className="font-bold">
                        First Name:
                    </label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        placeholder="John"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="last_name" className="font-bold">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        placeholder="Doe"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                </div>

                <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="font-bold">
                        Email address:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="password" className="font-bold">
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Abcd123!@#"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="confirm_password" className="font-bold">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Abcd123!@#"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200 appearance-none"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="py-2 bg-groovy-red rounded-md w-full shadow-md text-white">
                    Sign up for an account
                </button>
            </form>
            <p className="pt-5">
                Already have an account?{" "}
                <Button
                    link="/login"
                    className="text-white underline hover:text-gray-200">
                    Login!
                </Button>
            </p>
        </main>
    );
};

export default page;
