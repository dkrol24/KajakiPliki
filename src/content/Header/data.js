import { GiWoodCanoe } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { FaParking } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";

const tekst = [
    {
        title: '1. Rezerwujesz kajak telefonicznie lub przez formularz kontaktowy.',
        pic: <BiPhoneCall fontSize={35} color='white' />,
        index:'1'
    },
    {
        title: '2. Przyjezdzasz na parking, z którego zapewniamy transport na miejsce rozpoczęcia spływu.',
        pic: <FaBusAlt fontSize={35} color='white'/>,
        index:'2'
    },
    {
        title: '3. Wydajemy kajaki, kamizelki asekuracyjne i wiosła oraz pomagamy przy wodowaniu.',
        pic: <GiWoodCanoe fontSize={35} color='white'/>,
        index:'3'
    },
    {
        title: '4. Dopływasz na miejsce zakończenia spływu i oddajesz sprzęt 50m od parkingu.',
        pic: <FaParking fontSize={35} color='white'/>,
        index:'4'
    },
]

export default { tekst };