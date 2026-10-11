

const RightCardContent = (props) => {
  return (
    
          <div className="h-full overflow-hidden shrink-0 relative w-50 rounded-4xl ">
        <img className="h-full w-full object-cover" src={props.img} alt="" />
        <div className="h-full w-full absolute top-0 left-0 p-6 flex flex-col justify-between">
            <h2 className='text-gray-800 text-xl font-semibold  bg-white rounded-full h-10 w-10 flex items-center justify-center'>{props.id+1}</h2>
            <div >
                <p className="text-sm text-white mb-4 leading-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe temporibus qui ipsa fuga quia?</p>
                <div className="flex justify-between items-start gap-4">
                <button className="bg-blue-600 rounded-full text-white font-medium py-3 px-5">{props.tag}</button>
                <button  className="bg-blue-600 rounded-full text-white font-medium py-3 px-4"><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>

    </div>

  )
}

export default RightCardContent
   