import { PassionFont } from "../fonts";


const ServicesCard = ({ name, data }) => {
    return (
        <div className="m-auto">
            <div className={PassionFont.className}>
                <h3 className="uppercase text-5xl mb-3 headerTextCSS">
                    {name}
                </h3>
            </div>
            
            {data.map((point) => (
                <ul key={point}>
                    <li className="gap-2 text-xl">
                        {point}
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default ServicesCard;