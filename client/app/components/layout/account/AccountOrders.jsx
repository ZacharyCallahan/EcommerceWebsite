"use client";
import { AppStateContext } from "@/app/AppStateContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Button from "../../ui/Button";
import Header from "../../ui/Header";

const AccountOrders = () => {
    const { state, dispatch } = useContext(AppStateContext);
    const userID = state.user?._id;

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/orders/user/${userID}`)
            .then((res) => {
                const formattedOrders = res.data.map((order) => {
                    return {
                        ...order,
                        createdAt: new Date(order.createdAt).toLocaleDateString(
                            "en-US"
                        ),
                    };
                });
                setOrders(formattedOrders);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userID]);

    const reorder = (id) => {
        const order = orders.find((order) => order._id === id);

        const products = order.products || [];

        products.forEach((product) => {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    product: product,
                    size: product.size,
                    quantity: product.quantity,
                },
            });
        });
    };

    return (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 ">
            <Header className="space-y-2">
                <h1 className="text-3xl">Order History</h1>
                <p>Shows all of your orders that you've place.</p>
                <hr />
            </Header>

            <table className="w-full sm:text-xs md:text-base">
                <thead className="border-b-2">
                    <tr className="">
                        <th className="py-4 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            Total
                        </th>
                        <th className="py-4 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            Date Ordered
                        </th>
                        <th className="py-4 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr className="text-center border-b-2 table-row hover:bg-gray-200">
                            <td className="py-4 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                                ${order.subtotal}
                            </td>
                            <td className="py-4 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                                {order.createdAt}
                            </td>
                            <td className="py-4 sm:px-2 md:px-4 lg:px-6 xl:px-8">
                                <Link
                                    href={`/account/orders/${order._id}`}
                                    className="text-groovy-red  ">
                                    View Order
                                </Link>
                                <br />
                                <button
                                    onClick={() => reorder(order._id)}
                                    className="text-groovy-red sm:text-xs md:text-base">
                                    Order Again
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountOrders;
