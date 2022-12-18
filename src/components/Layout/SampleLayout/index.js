import NavSidebar from "../components/NavSidebar/NavSidebar";
export default function SampleLayout({ children }) {
    return (
        <>
            <div className="body absolute top-auto w-full">{children}</div>
            <NavSidebar></NavSidebar>
        </>
    );
}
