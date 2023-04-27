import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";

const page = () => {
    return (
        <main className="flex items-center justify-center h-screen flex-col ">
            <Logo headerClass="text-3xl" imageClass="w-16" />
            <form action="/login" method="post" className="w-[400px]">
                <div className="flex flex-col my-5">
                    <label htmlFor="email" className="font-bold">
                        Email address:
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="johndoe@gmail.com"
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200"
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
                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-purple ring-1 ring-slate-200"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="py-2 bg-groovy-red rounded-md w-full shadow-md text-bold text-white">
                    Sign in to account
                </button>
            </form>
            <p className="pt-5">
                Don't have an account?{" "}
                <Button
                    link="/register"
                    className="text-white underline hover:text-gray-200">
                    Sign up!
                </Button>
            </p>
        </main>
    );
}

export default page;