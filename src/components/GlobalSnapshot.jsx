import React from "react";
// Removed motion imports - using CSS fade effects instead

export default function GlobalSnapshot() {
  const handleScrollDown = () => {
    // Add scroll functionality to move to next section
    if (window.fullpage_api) {
      window.fullpage_api.moveSectionDown();
    }
  };

  return (
    <section className="h-screen w-full bg-white text-jldBlue text-center">
      {/* Mobile: Equally spaced layout */}
      <div className="md:hidden h-full w-full flex flex-col justify-center items-center px-4 py-8 relative">
        <div>
          <h2 className="text-2xl font-bold text-jldBlue mb-16">
            Global Snapshot
          </h2>

          <div
            className="flex flex-col w-full max-w-sm"
          >
          {/* First row */}
          <div className="grid grid-cols-2">
            {[
              { icon: "landscape", label: "Mines", value: "30+" },
              { icon: "geography", label: "Export Countries", value: "25+" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center gap-1"
              >
                <div className="w-10 h-10 relative">
                  <div 
                    className="w-full h-full bg-gradient-to-r from-[#101048] to-[#e4222b] rounded-lg"
                    style={{
                      maskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                      WebkitMaskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center'
                    }}
                  ></div>
                </div>
                <h2 className="text-lg font-semibold">{item.value}</h2>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2">
            {[
              { icon: "laboratory", label: "Innovation Labs", value: "2" },
              { icon: "dump-truck", label: "Tonnes/Year", value: "1M+" },
            ].map((item, index) => (
              <div 
                key={index + 2} 
                className="flex flex-col items-center gap-1"
              >
                <div className="w-10 h-10 relative">
                  <div 
                    className="w-full h-full bg-gradient-to-r from-[#101048] to-[#e4222b] rounded-lg"
                    style={{
                      maskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                      WebkitMaskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center'
                    }}
                  ></div>
                </div>
                <h2 className="text-lg font-semibold">{item.value}</h2>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Third row */}
          <div className="grid grid-cols-2">
            {[
              { icon: "factory", label: "Processing Plants", value: "4" },
              { icon: "time", label: "Years Legacy", value: "50+" },
            ].map((item, index) => (
              <div 
                key={index + 4} 
                className="flex flex-col items-center gap-1"
              >
                <div className="w-10 h-10 relative">
                  <div 
                    className="w-full h-full bg-gradient-to-r from-[#101048] to-[#e4222b] rounded-lg"
                    style={{
                      maskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                      WebkitMaskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center'
                    }}
                  ></div>
                </div>
                <h2 className="text-lg font-semibold">{item.value}</h2>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
                     </div>
        </div>
        </div>

        {/* Mobile-friendly Scroll Indicator - Same as Industries mobile version */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={handleScrollDown}
          onTouchStart={handleScrollDown}
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20
          }}
        >
          <div className="text-jldBlue/70 hover:text-jldBlue transition-colors p-2 flex items-center justify-center animate-bounce">
            <svg
              width="20" 
              height="20" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l3 3 3-3"/>
              <path d="M7 6l3 3 3-3"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop: Original layout */}
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:h-full md:w-full md:px-6 lg:px-8 md:py-20">
      <h2
          className="text-3xl md:text-5xl font-bold text-jldBlue mb-12 md:mb-16"
      >
        Global Snapshot
      </h2>

      <div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl w-full"
      >
        {[
          { icon: "landscape", label: "Mines", value: "30+" },
          { icon: "geography", label: "Export Countries", value: "25+" },
          { icon: "laboratory", label: "Innovation Labs", value: "2" },
          { icon: "dump-truck", label: "Tonnes/Year", value: "1M+" },
          { icon: "factory", label: "Processing Plants", value: "4" },
          { icon: "time", label: "Years Legacy", value: "50+" },
        ].map((item, index) => (
          <div 
            key={index} 
              className="flex flex-col items-center gap-2"
          >
              <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <div 
                className="w-full h-full bg-gradient-to-r from-[#101048] to-[#e4222b] rounded-lg"
                style={{
                  maskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                  WebkitMaskImage: `url(https://img.icons8.com/ios-filled/100/${item.icon}.png)`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center'
                }}
              ></div>
            </div>
              <h2 className="text-xl md:text-2xl font-semibold">{item.value}</h2>
            <p className="text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>

        {/* Desktop Scroll Indicator - Exact same positioning as Industries section */}
        <div
          className="absolute bottom-6 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={handleScrollDown}
          onTouchStart={handleScrollDown}
          style={{
            left: 'calc(50% - 10px + 2px)',
            width: '20px',
            height: '20px',
            zIndex: 20
          }}
        >
          <div className="text-jldBlue/70 hover:text-jldBlue transition-colors p-2 flex items-center justify-center animate-bounce">
            <svg
              width="20" 
              height="20" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l3 3 3-3"/>
              <path d="M7 6l3 3 3-3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}