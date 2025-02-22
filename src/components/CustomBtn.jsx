/* eslint-disable react/prop-types */
 
function CustomBtn({label,onClick}) {
    
    return(
                <button onClick={onClick} className="text-[#fff] bg-[#FF8383] border-none w-64 h-12 m-2 text-lg rounded-md">{label.toUpperCase()}</button> 
    )
}

export default CustomBtn;
