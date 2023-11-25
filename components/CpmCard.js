import react from 'react';

const CpmCard = (props) => {

    return (
        <div className="rounded-3xl bg-white  p-3 h-full" style={{ width: "22%"}}>
            <div className="flex flex-col w-full h-full gap-10">
                <div className="w-full justify-center flex">
                    <span className="rounded-3xl h-20 w-20 flex  justify-center items-center border border-gray-300 p-1 ">
                        <img src="" alt="handle image" className="rounded-full text-center" />             
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold">Post-roll</span>

                    </div>
                    <div>
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold" >Pre-Roll</span>

                    </div>
                    <div>
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold">Logo</span>

                    </div>
                    <div>
                        <span className="text-gray-400 text-center font-poppins text-sm font-bold">Layer</span>

                    </div>
                </div>


            </div>
        </div>
    )   


}


export default CpmCard;