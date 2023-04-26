export default function () {
    return (
        <div className="w-5/6 m-auto flex gap-5">
            <div className="bg-gray-100 shadow-md rounded-md p-4 space-y-5 grow-[2]">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">
                        Have a question? Shoot us a message.
                    </h1>
                    <p>We are here 24/7 to support you.</p>
                </div>
                <form action="/send/message" method="post">
                    <div className="flex flex-col mb-5">
                        <label htmlFor="full_name">Full Name:</label>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            placeholder="John Doe"
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="subject">Subject:</label>
                        <select
                            name="subject"
                            id="subject"
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-10 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            className="mt-2 text-slate-900 bg-white rounded-md px-3 h-20 shadow-md focus:outline-none focus:ring-2 focus:ring-groovy-red ring-1 ring-slate-200"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="p-2 bg-groovy-red rounded-md shadow-md w-fit font-bold  text-white text-center">
                        Send Message
                    </button>
                </form>
            </div>
            <div className="bg-gray-100 rounded-md shadow-md p-4 space-y-5 grow h-fit">
                <div className="flex items-center gap-3">
                    <i className="fa fa-location-arrow text-2xl w-8"></i>
                    <p>
                        Returns/Exchange, 124 Main St Los Angeles, CA 12345, USA
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <i className="fa fa-envelope text-2xl w-8"></i>
                    <p>example@company.com</p>
                </div>
                <div className="flex items-center gap-3">
                    <i className="fa fa-phone text-2xl w-8"></i>
                    <p>123-456-7890</p>
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Contact Us</h1>
                    <p>We are will have your back 24/7. Don't worry!</p>
                </div>
            </div>
        </div>
    );
}
