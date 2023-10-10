

export default function SelectComponent({ label, value, onChange, options=[] }) {


    return (
        <div className="relative">
            <p className="absolute z-10 pr-2 pt-0 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">{label}</p>

            <select value={value} onChange={onChange}
                className="border  focus:outline-none text-black align-middle focus:border-black w-full pt-2 pr-20 pb-2 pl-4 mr-0 mt-0 ml-0 text-center block bg-white border-gray-300 rounded "
            >
                {
                    options && options.length ? 
                    options.map(optionItem=> <option className=" block w-full p-2 text-sm border text-black border-gray-300 rounded-lg bg-gray-50" id={optionItem.id} value={optionItem.id} key={optionItem.id}>{optionItem.label}</option>)
                    : <option id="" value={""} selected className="text-black">Select</option>
                }
            </select>
        </div>
    )

}