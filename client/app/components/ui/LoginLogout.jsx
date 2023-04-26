import Button from "./Button";

export default function LoginLogout() {
    return (
        <>
            <Button className="flex items-center" link="/login">
                LOGIN
            </Button>

            <Button className="flex items-center" link="/logout">
                LOGOUT
            </Button>
        </>
    );
}
