import Header from "../components/ui/Header";
import AccountForm from "../components/ui/account/AccountForm";

export default function Account() {
    
    return (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 h-fit">

            <AccountForm/>
        </div>
    );
}
