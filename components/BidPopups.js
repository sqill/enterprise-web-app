import react, {useState} from 'react'


const EmailConfirmationPopup = (props) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="bg-white w-1/2 h-1/3 rounded-3xl flex flex-col justify-between p-10">
                <div className="flex w-full justify-center">
                    <h1 className="w-3/5 text-gray-500 font-bold text-base font-poppins text-center">
                        We have sent a code to your e-mail <span>{props.email}</span>
                        Please enter the 6 digits on the following space to confirm the bid</h1>
                </div>
                <div className="flex w-full justify-center">
                    <input placeholder="Digit your Code" type="text" className="w-2/5 h-12 rounded-3xl border border-gray-100 bg-white text-center text-gray-100 font-poppins text-sm font-normal flex justify-center focus:ring-greenSqill-500 focus:border-greenSqill-500 block" />
                </div>
                <div className="flex justify-center w-full">
                    <button className="flex items-center min-w-min h-11 gradient text-white bg-primary-600 hover:bg-primary-700  items-center justify-center rounded-3xl text-center cursor-pointer font-normal w-1/6 text-sm ">CONFIRM</button>
                </div>
            </div>


        </div>
    )
}

const BiddingConfirmation = (props) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center 	
        bg-white bg-opacity-60 z-20">
            <div className="bg-white w-1/2 h-1/3 rounded-3xl flex flex-col justify-center  items-center">
                <div className="flex flex-col items-center gap-6">
                    <img src="/images/cutLogo.png" className="w-16"></img>
                    <h1 className="text-2xl font-bold text-black font-poppins">Thank you for bidding</h1>
                    <div className="text-center text-base font-bold">
                        <p className="text-gray-500">You have confirmed a bid for <span className="text-black">Media Capital</span> social media ads.</p>
                        <p className="text-gray-500">Hope this will help you sky rocket your sales!</p>
                    </div>
                </div>

            </div>
        </div>    
    )
}






export { EmailConfirmationPopup, BiddingConfirmation };