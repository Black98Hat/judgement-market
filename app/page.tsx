"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-neutral-100 flex items-center justify-center px-6">

      {/* Ambient luxury light blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative w-full max-w-lg">

        <div className="backdrop-blur-xl bg-white/70 border border-neutral-200 shadow-[0_40px_120px_rgba(0,0,0,0.08)] rounded-[32px] p-12 space-y-10">

          <div className="space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Judgement
              <span className="block bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 bg-clip-text text-transparent">
                Market
              </span>
            </h1>

            <p className="text-neutral-500 text-base md:text-lg">
              Where conviction meets capital.
            </p>
          </div>

          <button
            className="w-full h-14 rounded-2xl bg-neutral-900 text-white text-lg font-medium tracking-wide hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 shadow-xl"
          >
            Continue with Google
          </button>

          <p className="text-xs text-neutral-400 text-center tracking-wide">
            Private access • Verified organization only
          </p>

        </div>
      </div>
    </main>
  );
}