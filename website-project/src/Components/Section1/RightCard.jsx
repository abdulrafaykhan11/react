import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div id= "right" className="h-full flex flex-nowrap gap-4 overflow-x-auto " >
              {props.users.map(function(user,idx) {
        return <RightCardContent key={idx} id={idx} img={user.img} tag={user.tag} />;
      })}
    </div>
  )
}

export default RightCard
