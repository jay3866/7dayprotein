import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const isDev = import.meta.env.DEV;

  useEffect(() => {
    // For development and testing: Remove the delay and simplify the exit intent detection
    if (isDev) {
      // The test button will handle showing the popup in dev mode
      return;
    }
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && // User's mouse moves to top of window
        !hasShown && // Haven't shown popup yet
        !localStorage.getItem('exitPopupDismissed') // Not dismissed in last 3 days
      ) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // In production: Wait 5 seconds before enabling exit intent (reduced from 30s for testing)
    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isDev]);

  const handleDismiss = () => {
    setIsVisible(false);
    // Don't show again for 3 days
    localStorage.setItem('exitPopupDismissed', new Date().toISOString());
  };

  return (
    <>
      {isDev && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-lg z-50 text-sm font-bold shadow-lg animate-pulse"
        >
          Test Exit Popup
        </button>
      )}
      {isVisible && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div 
            className="relative bg-white rounded-2xl max-w-[480px] w-full p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Leaving already? What if you're just 7 days away from effortless fat loss?
              </h2>
              
              <p className="text-gray-600 text-lg">
                This isn't another diet. It's a proven reset that works with your metabolism—not against it.
                No tracking. No extreme workouts. Just real results in 7 days.
              </p>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 my-6">
                <p className="text-gray-800 font-medium mb-2">
                  Try the 7-Day Reset completely risk-free
                </p>
                <p className="text-gray-600">
                  If it doesn't make sense by Day 3, you'll get your money back.
                  No questions asked.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleDismiss}
                  className="w-full bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 animate-pulse-shadow"
                >
                  Yes, I Want the Reset – Only $37
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  No thanks, I'll pass on the guarantee
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}