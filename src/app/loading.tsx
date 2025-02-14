export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-t from-gray-800 via-gray-900 to-black z-[999]">
        <div className="flex flex-col items-center space-y-6">
  
          {/* Text animation with slide effect */}
          <h2 className="text-5xl font-extrabold text-[#FFF7FC] animate-slide-in">
            Stay Healthy With Food-Tuck
          </h2>
  
          {/* Spinner with Vibrant Gradient */}
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin 
            border-t-transparent border-r-transparent border-b-transparent 
            bg-gradient-to-r from-blue-500 via-[#71BBB2] to-[#9B86BD]"
          ></div>
  
          {/* Progress bar with bright gradient */}
          <div className="w-64 h-1.5 bg-gray-700 rounded-full mt-6 overflow-hidden">
            <div className="w-1/2 h-full bg-gradient-to-r from-[#71BBB2] to-[#9B86BD] animate-progress" />
          </div>
        </div>
      </div>
    )
  }
  