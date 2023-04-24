import AccountNav from "../components/ui/account/AccountNav";

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="bg-gray-100">
            <div className="w-5/6 m-auto flex py-4 gap-5 shrink-0 ">
                <AccountNav />
                
                {children}
            </div>
        </section>
    );
}
