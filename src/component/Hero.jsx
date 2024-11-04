export default function Hero(props) {
    return(
        <div className="flex justify-start p-10 gap-7">
            <img className="w-[250px] h-[336px] rounded-md" src={props.img} alt="img"></img>
            <div className="flex flex-col max-w-[600px] ">

                <div className="flex flex-col py-9 gap-3">
                <div className="flex justify-start gap-2 items-center">
                    <img src="/images/Fill 219.svg" alt=""></img>
                    <h4 className="font-normal text-sm text-primary">{props.location}</h4>
                    <a href={props.googleMaps} target="_blank" rel="noreferrer" className="text-sm font-normal underline text-slate-400">View on Google Maps</a>
                </div>
                <h2 className="font-bold text-5xl text-primary">{props.title}</h2>
                </div>
                <div className="flex flex-col gap-6">
                <h3 className="font-bold text-xl text-primary">{props.startDate} - {props.endDate}</h3>
                <p className="font-normal text-xl text-primary">{props.description}</p>
                </div>
            </div>
        </div>
    )
}