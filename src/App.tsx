// React is automatically imported in Vite projects
import { Star, CheckCircle2, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// IMPORTANT FOR CLIENT: To remove the exit popup test button that appears in development mode,
// edit the ExitPopup.tsx file in the components directory and remove or comment out lines 40-46
// which contain the test button JSX code. You can also completely remove the ExitPopup component
// by removing this import and the <ExitPopup /> component on line 7 if you don't want the exit popup feature.
import { ExitPopup } from './components/ExitPopup';

function App() {
  return (
    <div className="font-sans">
      <ExitPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-emerald-50 py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 slide-in">
                Reset Your Metabolism
              </h1>
              <div className="text-5xl md:text-7xl font-bold text-emerald-700 mb-6 slide-in slide-in-delay-1">
                <span className="animate-underline">in 7 Days</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 slide-in slide-in-delay-2">
                Without Counting, Cardio, or Cutting Everything You Love
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 slide-in slide-in-delay-3">
                Discover the fat-loss method based on how your biology actually works—not outdated diet rules.
              </p>
              <p className="text-lg text-gray-700 mb-4 font-medium slide-in slide-in-delay-4">
                Limited Time: Get the complete Reset system and all bonuses today
              </p>
              <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform animate-pulse-shadow slide-in slide-in-delay-4">
                Yes, I Want the Reset – Only $37
              </button>
            </div>
            <div className="max-w-[500px] mx-auto md:mx-0 md:ml-auto">
              <img
                src="/7daymetabolicreset.png" 
                alt="7-Day Metabolic Reset Diagram showing protein satiety, hormonal balance, fat adaptation, and effortless weight loss"
                className="w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            It's Not Your Willpower.<br />
            It's What You've Been Told to Eat.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ArrowDownCircle className="text-red-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Low Protein Diet</h3>
                  <p className="text-gray-600">Constant hunger, cravings, and energy crashes leading to overeating and weight gain.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ArrowUpCircle className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Protein-Rich Reset</h3>
                  <p className="text-gray-600">Natural appetite control, stable energy, and effortless fat loss through metabolic optimization.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src="/protein1.png"
                alt="Protein-rich meal comparison"
                className="rounded-lg max-w-full h-auto object-contain"
                style={{ maxHeight: '380px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-amber-50 py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            The 7-Day Metabolic Reset: A Natural Fat-Loss Blueprint Based on Biology, Not Willpower
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "🥩",
                title: "Protein Satiety",
                description: "Learn how to leverage protein for natural appetite control"
              },
              {
                icon: "⚖️",
                title: "Hormonal Balance",
                description: "Optimize your hormones for enhanced fat burning"
              },
              {
                icon: "🔥",
                title: "Fat Adaptation",
                description: "Switch your body to efficient fat-burning mode"
              },
              {
                icon: "🏃",
                title: "Effortless Weight Loss",
                description: "Achieve results without extreme restrictions"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Secure your spot before the price increases
            </p>
            <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
              Unlock the Reset – Just $37 Today
            </button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            What's Inside the 30-Minute Training
          </h2>
          <div className="max-w-[650px] mx-auto space-y-6">
            {[
              "How protein satiety controls cravings",
              "How specific foods restore hormonal balance",
              "How to support fat adaptation without cardio",
              "Exactly what to eat for 7 days",
              "A simple plan without complexity"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">{item}</h3>
                  <p className="text-gray-600">Detailed guidance and practical steps to implement each component successfully.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-[650px] mx-auto bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">BONUS: Printable Resources</h3>
            <p className="text-gray-600">Get instant access to our complete collection of printable guides, meal planners, and tracking sheets.</p>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Why This Works (When Everything Else Failed)
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-[720px] mx-auto mb-12">
            Most diets try to override your biology. This one works with it. Instead of starving your body into submission, 
            the Reset supports the natural mechanisms your metabolism already uses to regulate hunger and burn fat.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column with Single Large Animation Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square max-w-md bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/3chart.png"
                  alt="Metabolism chart showing protein satiety, hormone reset, and fat adaptation"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column with Bullet Points */}
            <div className="space-y-10 flex flex-col justify-center">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  Protein Satiety = Less Hunger
                </h3>
                <p className="text-gray-600">
                  Higher protein triggers satiety signals like leptin and GLP-1—so you naturally eat less without trying.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  Hormone Reset = Real Fat Burning
                </h3>
                <p className="text-gray-600">
                  Balanced insulin and ghrelin levels allow your body to access stored fat for fuel instead of storing it.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  Fat Adaptation = Sustainable Energy
                </h3>
                <p className="text-gray-600">
                  You'll stop crashing mid-day as your body learns to rely on fat instead of sugar for energy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">What the Science Shows:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                <p>Higher protein intake reduces appetite by up to 30%</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                <p>Protein increases thermogenesis (your body burns more calories digesting it)</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 mt-1 flex-shrink-0" />
                <p>Lower protein diets increase cravings and fat storage over time</p>
              </li>
            </ul>
          </div>
          <div className="text-center">
            {/* You can add a custom call-to-action message here if needed */}
            <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg">
              Get Instant Access – Just $37
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-amber-50 to-emerald-50 py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Real People. Real Resets. Real Results.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full ring-2 ring-amber-200 ring-offset-2 bg-gray-200 flex items-center justify-center text-gray-400"
                  >
                    <span>User</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I've tried everything, but this reset actually worked. Lost 8 pounds in the first week!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section className="bg-amber-50 py-20">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Start Your Reset Today for Just $37
          </h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-600 mb-4">✓ Complete 7-Day Reset Protocol</p>
            <p className="text-gray-600 mb-4">✓ Bonus Printable Resources</p>
            <p className="text-gray-600 mb-8">✓ 30-Day Money-Back Guarantee</p>
          </div>
          <p className="text-lg text-gray-700 mb-4 font-medium">
            Start your transformation now with our 100% satisfaction guarantee
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg mb-4">
            Get Instant Access – Just $37
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What can I eat on the Reset?",
                a: "The Reset focuses on whole, nutrient-dense foods including lean proteins, vegetables, and strategic carbohydrates. You'll get a complete food list and meal plan."
              },
              {
                q: "Is this the same as keto?",
                a: "No, this is not a ketogenic diet. The Reset maintains moderate carbohydrate intake while optimizing protein for better results without the restrictions of keto."
              },
              {
                q: "What if I'm vegetarian?",
                a: "We provide complete vegetarian alternatives for all meals, ensuring you get optimal protein from plant-based sources."
              },
              {
                q: "How soon will I see results?",
                a: "Most people notice changes in energy and appetite within the first 2-3 days, with visible results typically appearing within the first week."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 hover:bg-amber-50/30 p-4 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">© 2025 7-Day Metabolic Reset. All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;