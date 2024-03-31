import bannerOne from "../../../assets/img/banner-1.png"
import bannerTwo from "../../../assets/img/banner-2.png"
import middle from "../../../assets/img/middle.png"

export const Banner = () => {

    return (
            <div className="flex ">
                <div className="flex relative">
                    <img src={bannerOne} alt="Left Side Banner" />
                    <div className="absolute h-full end-0" >
                        <img className="h-full" src={middle} alt="Middle Part Banner" />
                    </div>
                </div>
                <div>
                    <img src={bannerTwo} alt="Right side Banner" />
                </div>
            </div>
    )
}
