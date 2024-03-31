import bg from '../../../assets/img/Path 79.png'

export const BgTitle = ({title}) => {
    return (
        <div className="relative">
            <img className="xl:w-2/5 md:w-3/12 h-5" src={bg} alt="" />
            <h1 className="xl:text-4xl absolute -top-3 left-3 uppercase ">{title}</h1>
        </div>
    );
};
