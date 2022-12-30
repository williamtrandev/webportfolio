import { Link } from "react-router-dom";
function Background() {
    const background = [
        {
            title: "SEAFOAM",
            background:
                " bg-gradient-to-r from-green-200 via-green-300 to-blue-500",
        },
        {
            title: "PUMPKIN",
            background:
                " bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700",
        },
        {
            title: "PANDORA",
            background:
                " bg-gradient-to-r from-green-200 via-green-400 to-purple-700",
        },
        {
            title: "LAVENDER",
            background: " bg-gradient-to-r from-indigo-300 to-purple-400",
        },
        {
            title: "HUCKLEBERRY",
            background:
                " bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800",
        },
        {
            title: "ARENDELLE",
            background:
                " bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500",
        },
        {
            title: "SUNSET",
            background:
                " bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
        },
        {
            title: "STRAWBERRY",
            background:
                " bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400",
        },
        {
            title: "BOREALIS",
            background: " bg-gradient-to-r from-green-300 to-purple-400",
        },
        {
            title: "EARTH",
            background: " bg-gradient-to-r from-teal-200 to-lime-200",
        },
        {
            title: "SEA",
            background: " bg-gradient-to-r from-cyan-200 to-cyan-400",
        },
        {
            title: "HUNNIEPOP",
            background:
                " bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700",
        },
        {
            title: "SILVER",
            background: " bg-gradient-to-r from-gray-100 to-gray-300",
        },
        {
            title: "BEAM OF LIGHT",
            background:
                " bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900  ",
        },
        {
            title: "SAND BEAM",
            background:
                " bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900",
        },
    ];

    return (
        <div className="p-2  bg-gray-900 text-center">
            <h1 className="font-bold ">
                &#9995;{" "}
                <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Choose Your Background Portfolio
                </span>{" "}
                &#9757;
            </h1>

            <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
                {background.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto pt-4`}
                    >
                        <div className="flex flex-col items-center pb-10">
                            <div
                                className={`w-[335px] h-[152px] mb-3 rounded-full shadow-lg ${item.background}`}
                            ></div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {item.title}
                            </h5>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <Link to={"/"}>
                                    <div className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                                        Back Home
                                    </div>
                                </Link>
                                <Link
                                    to={"/CreatePortfolio"}
                                    onClick={(e) => {
                                        localStorage.setItem(
                                            "backgroungColor",
                                            item.background
                                        );
                                    }}
                                >
                                    <div className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Choose Background and Edit
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Background;
