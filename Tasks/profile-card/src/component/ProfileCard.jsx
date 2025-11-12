import "../App.css"
import headshot from "../assets/headshot.jpg"




function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-32">
    <div className="min-w-fit bg-white rounded-lg shadow-lg overflow-hidden">
     
      <div className="h-32 bg-gradient-to-r from-green-700 via-white to-green-700 "></div>
      
     
      <div className="relative px-6 -mt-16">
        <div className="w-32 h-32 bg-gray-300 rounded-full  mx-auto overflow-hidden">
          <img src={headshot} alt="Tech sis" />s
        </div>
      </div>
      
     
      <div className="text-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-500 under">Adebimpe Atoyebi</h2>
        <p className="text--600 mt-1">AI Developer</p>
        <p className="text-sm text-gray-500 mt-2">Abeokuta, Nigeria 🇳🇬</p>
        
       
        <p className="text-gray-700 mt-4 text-sm leading-relaxed">
          I am Adebimpe and I have the needed skills to build amazing web applications with React and Tailwind CSS to solve real-world problems.
        </p>
        
      
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <div>
            <p className="text-2xl font-bold text-naija-green">100.8m</p>
            <p className="text-xs text-gray-600 uppercase">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">119</p>
            <p className="text-xs text-gray-600 uppercase">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-naija-green">106</p>
            <p className="text-xs text-gray-600 uppercase">Following</p>
          </div>
        </div>
        
      
        <button className="mt-6 w-full bg-naija-green text-white font-semibold py-3 rounded-lg">
          Follow
        </button>
      </div>
    </div>
    </div>
  );
}

export default ProfileCard;