import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div>
                <Link to="/">
                    <span>Back to Homepage</span>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
