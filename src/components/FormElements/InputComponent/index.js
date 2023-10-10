




export default function InputComponent({label, placeholder, type, value, onChange }){


    return(
        <div className="relative">
            <p className="absolute pr-2 pt-0 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium bg-white text-gray-600 ">{label}</p>
            <input 
            placeholder={placeholder}
            type={type || 'text'}
            value={value}
            onChange={onChange}
            className="border text-black placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded "
            />
        </div>
    )

}