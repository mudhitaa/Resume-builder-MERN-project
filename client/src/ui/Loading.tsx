export const Spinner = ({
    className = "",
    size = "w-20 h-20",
}: Readonly<{ className?: string; size?: string }>) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">

            <div className="flex flex-col items-center gap-8">

                {/* SPINNER WRAPPER */}
                <div className="relative flex items-center justify-center">

                    {/* OUTER GLOW */}
                    <div className="absolute w-40 h-40 rounded-full bg-blue-200/30 blur-3xl animate-pulse" />

                    {/* SECOND GLOW */}
                    <div className="absolute w-28 h-28 rounded-full bg-yellow-200/40 blur-2xl animate-pulse" />

                    {/* MAIN RING */}
                    <div
                        className={`
                            ${size}
                            rounded-full
                            border-8
                            border-blue-100
                            border-t-blue-600
                            border-r-yellow-400
                            animate-spin
                            shadow-2xl
                            shadow-blue-300/40
                            ${className}
                        `}
                    />

                    {/* INNER CIRCLE */}
                    <div className="absolute w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-yellow-300 shadow-lg" />

                </div>

                {/* LOADING TEXT */}
                <div className="flex flex-col items-center gap-2">

                    <h2 className="text-2xl font-bold tracking-wide text-blue-700">
                        Loading
                    </h2>

                    <div className="flex gap-1">

                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />

                        <span
                            className="w-2 h-2 rounded-full bg-yellow-400 animate-bounce"
                            style={{ animationDelay: "0.15s" }}
                        />

                        <span
                            className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
                            style={{ animationDelay: "0.3s" }}
                        />

                    </div>

                    <p className="text-sm text-gray-500 mt-2">
                        Preparing your experience...
                    </p>

                </div>

            </div>

        </div>
    );
};