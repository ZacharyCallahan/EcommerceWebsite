import Header from "../Header";

const AccountOrders = () => {
    return (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 h-fit">
            <Header className="space-y-2">
                <h1 className="text-3xl">Order History</h1>
                <p>Shows all of your orders that you've place.</p>
                <hr />
            </Header>

            <table className="">
                <thead className="border-b-2">
                    <tr className="">
                        <th className=" py-4">Order Number</th>
                        <th className=" py-4">Total</th>
                        <th className=" py-4">Date Ordered</th>
                        <th className=" py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center border-b-2 table-row hover:bg-gray-200">
                        <td className=" py-4">id</td>
                        <td className=" py-4">$price</td>
                        <td className=" py-4">date</td>
                        <td className=" py-4">
                            <a
                                href="/order/{{order.id}}"
                                className="text-groovy-red">
                                View Order
                            </a>
                            |
                            <a
                                href="/reorder/{{order.id}}"
                                className="text-groovy-red">
                                Order Again
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AccountOrders;
