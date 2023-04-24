'use client'
import Header from "../Header";

const AccountPassword = () => {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log("Submitted");
        };
    return (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 h-fit">
            <Header className="space-y-2">
                <h2 className="text-3xl">Account Password</h2>
                <p className="font-normal opacity-75">
                    Shows all of your orders that you've place.
                </p>
                <hr />
            </Header>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="old_password" className="font-bold">
                        Current Password:
                    </label>
                    <input
                        type="password"
                        name="old_password"
                        id="old_password"
                        placeholder="Abcd123!@#"
                        className="w-1/3 mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        required
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="new_password" className="font-bold">
                        New Password:
                    </label>
                    <input
                        type="password"
                        name="new_password"
                        id="new_password"
                        placeholder="Abcd123!@#"
                        className="w-1/3 mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
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
                        className="w-1/3 mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-groovy-red text-white rounded-md px-3 py-2 shadow-md hover:bg-groovy-red-dark focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200">
                    Update Password
                </button>
            </form>
        </div>
    );
}

export default AccountPassword;