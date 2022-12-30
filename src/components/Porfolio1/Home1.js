import Box from "../DragAndDrop/Box";
import Icon from "../DragAndDrop/Icon";
function Home1({classname = "bg-yellow-500"}) {
    const height = window.innerHeight;
    const width = (window.innerWidth - 348) * 0.9;
    return (
        <div className={`w-full h-[600px] relative  changeClass ${classname}` }>
            <Box
                item={"BRAND"}
                width={110}
                height={40}
                x={width * 0.0207253886}
                y={height * 0.09055876685}
                classname={"text-rose-600 font-bold text-3xl"}
            />
            <Box
                item={"CONTENT CREATOR"}
                width={300}
                height={40}
                x={width * 0.2518134715}
                y={height * 0.09055876685}
                classname={"text-rose-600 font-bold text-3xl"}
            />
            <Box
                item={"PHOTOGRAPHER"}
                width={270}
                height={40}
                x={width * 0.66632124352}
                y={height * 0.09055876685}
                classname={"text-rose-600 font-bold text-3xl"}
            />

            <Icon
                width={200}
                height={200}
                x={width * 0.70466321243}
                y={height * 0.28709055876}
                classname={"text-green-600"}
            />
            <Box
                item={"CREATIVE"}
                width={500}
                height={100}
                x={width * 0.0207253886}
                y={height * 0.20709055876}
                classname={"text-rose-600 font-bold text-8xl"}
            />
            <Box
                item={"PORTFOLIO"}
                width={560}
                height={100}
                x={width * 0.0207253886}
                y={height * 0.35096339113}
                classname={"font-bold text-8xl text-green-600"}
            />
            <Box
                item={
                    "Learn English with the most interesting Bible stories, starting with Abraham. Take a Look at the Book. Examine the Message. Learn the Story. Explore the Bible. Types: Read and listen to story, Articles in English, & 30 other languages."
                }
                width={670}
                height={100}
                x={width * 0.0207253886}
                y={height * 0.50988439306}
                classname={"text-lg text-green-600"}
            />
            <Box
                item={"BY TSIMPLE"}
                width={270}
                height={40}
                x={width * 0.0207253886}
                y={height * 0.68666666666}
                classname={"text-green-600 font-bold text-xl"}
            />
            <Box
                item={"2022"}
                width={200}
                height={40}
                x={820 - 100 - 40}
                y={height * 0.68666666666}
                classname={"text-green-600 font-bold text-xl"}
            />
        </div>
    );
}
export default Home1;
