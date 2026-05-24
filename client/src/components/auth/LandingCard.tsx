export const LandingCard=()=>{
    return(
        <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md group">
            <div className="absolute inset-0 bg-linear-to-br from-blue-400 via-indigo-400 to-purple-400 blur-3xl opacity-25 rounded-full transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"></div>
            {/* Card */}
            <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold text-gray-800">
                Resume Preview
                </h3>

                <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-linear-to-r from-green-100 to-emerald-100 text-green-700 border border-green-200 shadow-sm">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                Live Preview
                </span>
            </div>

            {/* Animated lines */}
            <div className="space-y-3">
                <div className="h-3 rounded w-3/4 bg-linear-to-r from-gray-300 to-gray-200 animate-pulse"></div>
                <div className="h-3 rounded w-1/2 bg-linear-to-r from-blue-200 to-indigo-200 animate-pulse"></div>
                <div className="h-3 rounded w-5/6 bg-linear-to-r from-purple-200 to-pink-200 animate-pulse"></div>
                <div className="h-3 rounded w-2/3 bg-linear-to-r from-gray-200 to-gray-100 animate-pulse"></div>
                <div className="h-3 rounded w-4/5 bg-linear-to-r from-indigo-200 to-blue-200 animate-pulse"></div>
            </div>
            
            <div className="my-5 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
          
            <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">
                ATS optimized • Clean formatting
                </span>
            </div>

            </div>
        </div>
        </div>
    )
}



export const LoginPreviewCard = () => {
  return (
    <div className="hidden md:flex justify-center">
      <div className="relative w-full max-w-lg group">
        
        <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-25 blur-3xl rounded-full scale-95 group-hover:scale-105 transition-all duration-700"></div>

        {/* FLOATING DECORATION */}
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-400/20 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-purple-400/20 blur-2xl animate-pulse"></div>

        {/* MAIN CONTAINER */}
        <div className="relative bg-white/75 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-4xl overflow-hidden transition-all duration-500 ">

          {/* TOP WINDOW BAR */}
          <div className="h-12 border-b border-gray-100 flex items-center px-5 bg-white/70">

            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            </div>

            <div className="ml-auto flex items-center gap-2 text-[11px] text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              saved
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 space-y-3">

            <div className="space-y-1">
              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="h-2.5 rounded-full bg-linear-to-r from-blue-200 to-indigo-100 w-2/3 animate-pulse"></div>
                  <div className="h-2 rounded-full bg-gray-200 w-1/2"></div>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="h-2.5 rounded-full bg-linear-to-r from-purple-200 to-pink-100 w-3/4 animate-pulse"></div>
                  <div className="h-2 rounded-full bg-gray-200 w-2/5"></div>
                </div>

              </div>

            </div>

            {/* LINE */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-linear-to-b from-blue-400 to-purple-400 relative">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
              </div>
            </div>

            {/* GENERATED */}
            <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">

              {/* RESUME HEADER */}
              <div className="h-9 border-b border-gray-100 flex items-center px-4 bg-gray-50">

                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                </div>

                <div className="mx-auto h-2 w-16 rounded-full bg-gray-200"></div>

              </div>

              {/* RESUME BODY */}
              <div className="p-5 space-y-4 bg-linear-to-b from-gray-50 to-white">

                {/* NAME */}
                <div className="space-y-2">
                  <div className="h-3 rounded-full bg-gray-800 w-1/3"></div>
                  <div className="h-2 rounded-full bg-gray-300 w-2/3"></div>
                </div>

                {/* TAGS */}
                <div className="flex gap-2 flex-wrap">
                  <div className="h-6 w-16 rounded-full bg-blue-100"></div>
                  <div className="h-6 w-20 rounded-full bg-indigo-100"></div>
                  <div className="h-6 w-14 rounded-full bg-purple-100"></div>
                </div>

                {/* CONTENT */}
                <div className="space-y-3">

                  <div className="space-y-2">
                    <div className="h-2.5 rounded-full bg-gray-300 w-1/4"></div>
                    <div className="h-2 rounded-full bg-gray-200"></div>
                    <div className="h-2 rounded-full bg-gray-200 w-5/6"></div>
                  </div>


                </div>

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
  );
};