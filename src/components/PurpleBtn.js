import '../assets/global.css'

const PurpleBtn = (props) => {
    return(
            <button className='btn py-2 px-6 text-[#FFF] rounded-lg text-sm font-semibold'>{props.name}</button>
    )
}

export default PurpleBtn;