export function StaticImageStage() {
  return (
    <section className="relative w-full">
      <div className="relative min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] overflow-hidden">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/clausevault-bg-71.jpg')" }}
        ></div>

        {/* KEY FIX: shape a readable field behind UI */}
        {/* Global dark wash */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Left-to-right "content field" (Apple-style) */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.20)_78%,rgba(0,0,0,0.10)_100%)]"></div>

        {/* Vignette to quiet edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.10),rgba(0,0,0,0.88))]"></div>

        {/* Bottom fade into next black section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"></div>

        {/* Content overlay */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 sm:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* LEFT */}
            <div className="lg:col-span-5">
              <p
                className="text-xs tracking-[0.28em] text-white/70"
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                }}
              >
                PROBLEM
              </p>

              <div className="mt-5 text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px]">
                01
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                PROBLEM → WHY → WHAT → WHO.
                <br />
                <span className="text-white/55">Scroll effect later.</span>
              </p>

              {/* Rail (static) */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span
                    className="text-xs tracking-[0.28em] text-white"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    }}
                  >
                    PROBLEM
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70"></span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span
                    className="text-xs tracking-[0.28em] text-white/55"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    }}
                  >
                    WHY
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span
                    className="text-xs tracking-[0.28em] text-white/55"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    }}
                  >
                    WHAT
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span
                    className="text-xs tracking-[0.28em] text-white/55"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    }}
                  >
                    WHO
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
                </div>
              </div>
            </div>

            {/* RIGHT: Apple glass panel */}
            <div className="lg:col-span-7 lg:pt-2">
              <div className="max-w-[640px] lg:ml-auto">
                <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8">
                  <p
                    className="text-xs tracking-[0.28em] text-white/70"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    }}
                  >
                    PROBLEM
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Deals don't die from drama. They die from friction.
                  </h3>

                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-white/80 sm:text-[15px]">
                    Missed details, unclear communication, and the classic "I thought you had it" moment.
                  </p>

                  <div className="mt-8 h-px w-full bg-white/10"></div>

                  <p className="mt-4 text-sm text-white/70">
                    The smallest gap turns into a giant mess under volume.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[25%] rounded-full bg-white/55"></div>
                    </div>
                    <div className="text-xs text-white/60">1/4</div>
                  </div>
                </div>

                {/* Optional: remove this line in production */}
                <p className="mt-4 text-xs text-white/45">
                  (No sticky/scroll here — this is the clean visual baseline.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
