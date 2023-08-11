import { Head, Link } from "@inertiajs/react";

const Welcome = ({ name = "World" }) => {
    return (
        <>
            <Head title="Welcome from Inertia" />
            <section>
                <p>Welcome {name}, this is inertia page.</p>

                <Link
                    href="/about"
                    className="mt-6 flex items-center text-xl font-semibold"
                >
                    About Us
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        ></path>
                    </svg>
                </Link>
            </section>
        </>
    );
};

export default Welcome;
