const Checkout = () => {
    return (
        <section className="bg-gray-100  space-y-32 pb-32">
            <form
                action="/process_checkout"
                method="post"
                className="w-5/6 m-auto space-y-12 py-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                <div>
                    
                    <div className="bg-white p-5 rounded-md shadow-md gap-5 h-fit">
                        <h2 className="mb-5 font-bold text-2xl">
                            Contact Information
                        </h2>
                        <div>
                            <div className="border-b-2 mb-5 pb-5">
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="email">
                                        Email address:
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value="{{ user.email or '' }}"
                                        placeholder="johndoe@gmail.com"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="phone">Phone number:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="123-456-7890"
                                        value="{{ user.phone or '' }}"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                            </div>
                            <div className="sm:grid sm:grid-cols-2 sm:gap-5">
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="first_name">
                                        First name:
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        value="{{ user.first_name or '' }}"
                                        placeholder="John"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                                <div className="flex flex-col mb-5">
                                    <label htmlFor="last_name">
                                        Last name:
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        value="{{ user.last_name or '' }}"
                                        placeholder="Doe"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value="{{ user.address or ''}}"
                                    placeholder="1234 Main St"
                                    className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                />
                            </div>
                            <div className="space-y-5 sm:grid sm:grid-cols-2 sm:gap-5  sm:space-y-0">
                                <div className="flex flex-col">
                                    <label htmlFor="city">City:</label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        value="{{ user.city or '' }}"
                                        placeholder="New York"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="state">State:</label>
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        value="{{ user.state or '' }}"
                                        placeholder="NY"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="zip_code">Zip code:</label>
                                    <input
                                        type="text"
                                        name="zip_code"
                                        id="zip_code"
                                        value="{{ user.zip_code or '' }}"
                                        placeholder="10001"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="country">Country:</label>
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        value="{{ user.country or '' }}"
                                        placeholder="United States"
                                        className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200 appearance-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-md shadow-md gap-5 h-fit">
                    <h2 className="mb-5 font-bold text-2xl">Order summary</h2>

                    <ul className="space-y-5">
                        <li className="flex justify-between border-b-2 pb-5">
                            <div className="flex gap-5 h-fit">
                                <img
                                    src="{{item.image}}"
                                    alt=""
                                    className="w-20 rounded-md"
                                />
                                <div className="w-1/2">
                                    <h3 className="font-bold text-lg">title</h3>
                                    <p className="text-sm text-gray-500">
                                        Size: 10
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between text-right w-1/2">
                                <div>
                                    <p className="font-bold text-lg">$price</p>
                                    <p className="text-sm text-gray-500">
                                        Quantity:{" "}
                                    </p>
                                </div>
                                <a
                                    href="/remove_item/{{item.product_id}}"
                                    className="hover:text-groovy-red">
                                    Remove
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="space-y-5">
                        <div className="border-b-2 pb-5">
                            <div className="flex justify-between mt-5">
                                <p className="text-md">Subtotal</p>
                                <p className="text-md">$total</p>
                            </div>
                        </div>
                        <div className="flex justify-between pb-5 border-b-2">
                            <p className="font-bold text-lg">Total</p>
                            <p className="font-bold text-lg">$total</p>
                        </div>
                        <button
                            type="submit"
                            className="py-2 bg-groovy-red rounded-md w-full shadow-md text-white">
                            Checkout
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Checkout;
