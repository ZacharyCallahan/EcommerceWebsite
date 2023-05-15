"use client";
import { AppStateContext } from "@/app/AppStateContext";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Header from "../../ui/Header";

const OrderView = () => {
    const [order, setOrder] = useState([]);

    const { id } = useParams();

    const products = order.products || [];

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`)
            .then((res) => {
                const formattedOrder = {
                    ...res.data,
                    createdAt: new Date(res.data.createdAt).toLocaleDateString(
                        "en-US"
                    ),
                };
                setOrder(formattedOrder);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="flex grow-[3] flex-col bg-white p-5 rounded-md shadow-md gap-5 ">
            <Header className="space-y-2">
                <h1 className="text-3xl">Order Number: {id}</h1>
                <p>Shows all the products with-in the order.</p>
                <hr />
            </Header>

            <table className="">
                <thead className="border-b-2">
                    <tr className="">
                        <th>Image</th>
                        <th className=" py-4">Item ID</th>
                        <th className=" py-4">Name</th>
                        <th className=" py-4">Price</th>
                        <th className=" py-4">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className="text-center border-b-2 hover:bg-gray-200">
                            <td className=" py-4 flex justify-center">
                                <Image
                                    src={product.image}
                                    width={100}
                                    height={100}
                                    alt={product.productDisplayName}
                                />
                            </td>
                            <td className=" py-4">{product.id}</td>
                            <td className=" py-4">
                                {product.productDisplayName}
                            </td>
                            <td className=" py-4">${product.price}</td>
                            <td className=" py-4 space-x-2">
                                <Link
                                    href={`/product/${product._id}`}
                                    className="text-groovy-red">
                                    View Product
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderView;
