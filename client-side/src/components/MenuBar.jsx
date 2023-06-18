export default function  MenuBar({category}){
    return(
        <div>
        <div className="w-full">
        <ul className="menu menu-vertical lg:menu-horizontal bg-blue-900  text-white flex w-full">
        <li><a>menitNews</a></li>
        <li><a>menitFinance</a></li>
        <li><a>menitHot</a></li>
        <li><a>menitInet</a></li>
        <li><a>menitSport</a></li>
        <li><a>menitOto</a></li>
        <li><a>menitTravel</a></li>
        <li><a>menitFood</a></li>
        <li><a>menitHealth</a></li>
        <li><a>Wolipop</a></li>
        <li><a>30Menit</a></li>
        </ul>
        </div>
        </div>
  
    )
}