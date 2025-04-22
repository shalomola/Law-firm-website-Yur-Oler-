import Texts from '../../../components/Texts'
import { Button } from '../../../components/Button'
import Card from '../../../components/Card'
import { IMAGES } from '../../../constants/data'
import { Link } from 'react-router-dom'

const Experts = () => {
  return (
    <div className='w-full h-[200vh] lg:h-screen flex flex-col lg:flex-row lg:items-center gap-20 p-5 lg:p-10 bg-white'>
        <div className="text w-full lg:w-2/5 h-auto box-border pt-10 lg:pt-0 flex flex-col items-start justify-center gap-5">
            <Texts heading="Excellence Through Team Expertise" />
            <Link to={"/experts"}>
                <Button title='More' styles='bg-[#192026] flex items-center gap-5 text-white lg:mt-10' arrow={"secondary"} />
            </Link>
        </div>
        <div className="cards flex flex-col lg:flex-row w-full lg:w-3/5 h-auto justify-between">
            <Card picture={IMAGES.man} name='Agbaje Emmanuel' denomination='Corporate Business Law' extraStyles=''/>
            <Card picture={IMAGES.woman} name='Fajuagbe Esther' denomination='Criminal Law' extraStyles='lg:display-block' />
        </div>
    </div>
  )
}

export default Experts