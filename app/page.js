import Slider from "@/app/_components/Slider";
import GlobalApi from "@/app/_utils/GlobalApi";

export default async function Home() {
    const sliderList= await GlobalApi.getSliders();
    return (
        <div>
            <Slider sliderList={sliderList} />
        </div>
    );
}
