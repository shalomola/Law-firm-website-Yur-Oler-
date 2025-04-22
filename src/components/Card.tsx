
type CardProps = {
    picture: string,
    name: string,
    denomination: string,
    extraStyles: string,
}

const Card = ({ picture, name, denomination, extraStyles }: CardProps) => {
  return (
    <div className={`min-w-70 h-auto ${extraStyles}`}>
        <div className="dp w-full h-74">
            <img src={picture} alt="" className="w-full h-full object-cover object-top" />
        </div>
        <div className="info mt-5 ml-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-lg font-semibold">{denomination}</p>
            <p className="text-sm w-9/10">extra information about the person</p>
        </div>
    </div>
  )
}

export default Card