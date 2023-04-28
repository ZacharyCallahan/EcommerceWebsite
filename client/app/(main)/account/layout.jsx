import AccountNav from "../../components/layout/account/AccountNav";

export default function AccountLayout({
    children,
}) {
    return (
        <section className="bg-gray-100">
            {/* <div className="w-5/6 m-auto flex py-4 gap-5 shrink-0 "> */}
            <div className="w-5/6 m-auto py-4 space-y-5 sm:flex sm:space-y-0  sm:gap-5 ">
                <AccountNav />

                {children}
            </div>
        </section>
    );
}
