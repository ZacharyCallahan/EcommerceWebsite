import Rating from "./Rating";
const Review = () => {
    return (
        <div className="grid grid-cols-fluid items-center justify-center py-5 border-b-2 gap-5">
            <div>
                <h3 className="font-bold mb-3">Risaka M</h3>
                <p className="text-gray-500">May 16, 2021</p>
            </div>
            <Rating />
            <div>
                <h3 className="font-bold mb-3">Can't say enough things</h3>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt assumenda dignissimos debitis sapiente aliquid quasi,
                    necessitatibus fuga inventore accusamus nemo vitae obcaecati
                    nam, voluptate quod! Suscipit voluptate nam ut tenetur!
                </p>
            </div>
        </div>
    );
}

export default Review;