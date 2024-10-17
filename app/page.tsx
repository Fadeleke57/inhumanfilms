export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <div className="flex flex-row gap-8">
          <div>
            <h1 className="text-6xl font-bold mb-4">Inhuman Films</h1>
            <h3 className="text-2xl font-semibold">
              White Dog: The Moral Dilemma of Racism through the Eyes of an
              Animal
            </h3>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/x8QQXuCFc9k?si=YNTCGzZzxxRDpY0k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
        <div></div>
        <footer></footer>
      </main>
    </div>
  );
}
