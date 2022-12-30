import { IoTrashBinSharp } from "react-icons/io5";
export default function Remove() {
    const handleRemove = (e) => {
        // const root =
        //     e.target.parentElement.parentElement.parentElement.parentElement;
		// console.log(root);
		// console.log(e.target.parentElement.parentElement.parentElement);
		// root.removeChild(e.target.parentElement.parentElement.parentElement);
        console.log(e.target.parentElement.parentElement.parentElement.parentElement);
		// e.target.parentElement.parentElement.parentElement.classList.add(
        //     "hidden"
        // );
    };
    return (
        <div
            className="absolute -top-1/2 right-0 translate-x-1/2 translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100"
            onClick={handleRemove}
        >
                <IoTrashBinSharp className="text-[50px]"></IoTrashBinSharp>
        </div>
    );
}
