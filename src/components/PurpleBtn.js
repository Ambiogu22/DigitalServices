import '../assets/global.css'

const PurpleBtn = (props) => {
    return(
            <button className='btn p-2 text-[#FFF] rounded-lg text-sm font-semibold'>{props.name}</button>
    )
}

export default PurpleBtn;