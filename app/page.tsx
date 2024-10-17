import Image from "next/image";
import churchImage from "./church.jpg";
import natureImage from "./natureNuture.png";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-32 row-start-2">
        <div className="flex justify-center items-center">
          <div className=" max-w-5xl text-center">
            <h1 className="text-6xl font-bold mb-4">
              Farouk Adeleke - Inhuman Films
            </h1>
            <h3 className="text-2xl font-semibold mb-4">
              <i>White Dog</i>: The Moral Dilemma of Racism through the Eyes of an
              Animal
            </h3>
            <h6>
              <i>White Dog</i> challenges audiences to confront racism by channeling it
              through the perspective of an animal trained to hate, but this
              narrative device complicates the anti-racist message its trying to
              convey, risking misplaced empathy and emotional distance from the
              audience. Storytelling that distances racism from human
              responsibility dilutes its urgency.
            </h6>
          </div>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Can Hatred Be Unlearned?
              </h3>
              <p className="font-semibold">
                At its core, the story asks whether society should focus on
                punishing those who perpetuate hate or on helping them unlearn
                these behaviors. This tension is reflected in the dog&apos;s
                gradual progress throughout the film, as the viewer is left
                wondering whether rehabilitation is even possible and if it is,
                whether it is enough. Through the dog&apos;s journey,{" "}
                <i className="mr-2">White Dog </i>
                engages with a bigger conversation about societal change. The
                film suggests that efforts to reform individuals, kind of like
                efforts to change social systems, are coupled with challenges
                and uncertainties. Even when there is progress, the film implies
                that some remnants of hate may linger, just as the dog&apos;s
                snarl persists in its final moments. This ambiguous ending
                forces viewers to confront the uncomfortable possibility that
                some forms of hate, once learned, may never fully disappear.
              </p>
            </div>
          </div>
          <div>
            <iframe
              width="560"
              height="400"
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
        <div className="flex flex-row gap-16">
          <div>
            <Image
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22fc4aac-1f0b-4a12-8169-72a8aff251b1/dg4irlh-8fab2346-ecd8-48b1-a9a8-90a37574996c.jpg/v1/fit/w_828,h_1072,q_70,strp/white_dog__1982__by_adrockhoward_dg4irlh-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NyIsInBhdGgiOiJcL2ZcLzIyZmM0YWFjLTFmMGItNGExMi04MTY5LTcyYThhZmYyNTFiMVwvZGc0aXJsaC04ZmFiMjM0Ni1lY2Q4LTQ4YjEtYTlhOC05MGEzNzU3NDk5NmMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1ixnywUUEJ_q_FztuNqzOVjvN48fiw1TXcxeHV6kw-4"
              width={5000}
              height={500}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Animals as Conduits for Social Messages
              </h3>
              <p className="font-semibold">
                The tension surrounding <i>White Dog</i> stems from the film&apos;s
                choice to use a dog as a vessel for racism. Critics expressed
                concerns that the audience might empathize more with the dog,
                seeing it as a victim of its racist training,than with the
                humans it attacks. This risk reflects a broader challenge in
                storytelling. When animals are used as metaphors for human
                ideologies, there&apos;s a danger that the real, human issues
                can become secondary to the moral dilemmas involving the
                animals. Throughout history, animals in film have been used to
                explore complex social themes. In works like <i>Animal Farm</i>{" "}
                or
                <i> Babe</i>, animals are metaphors for human behavior and
                political systems. <i>White Dog</i> complicates this tradition by
                making the dog an active participant in racial violence,
                suggesting that just as the animal has learned hatred, racism a
                learned behavior in society. By framing the narrative around the
                possibility of reversing the dog&apos;s conditioning, the film
                invites audiences to consider the origins of hateful behavior
                and the potential for change.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nature vs. Nurture</h3>
            <p className="font-semibold">
              Central to the film&apos;s narrative is the idea that hatred is
              not innate but rather learned through conditioning. The dog in
              <i>White Dog</i> serves as a symbol of societal racism, suggesting that
              individuals are shaped by the environment they grow up in, rather
              than being born hateful. This theme raises challenging questions
              about responsibility: Are the individuals who act on hateful
              ideologies truly at fault, or does the blame lie with the systems
              that teach these beliefs? By focusing on the question of whether
              the dog&apos;s violent behavior can be reversed, <i>White Dog</i> draws
              attention to the complex interaction between nature and nurture. The
              dog&apos;s actions throughout the film reflect the idea that
              hatred is not natural but learned. This, in turn, forces viewers
              to consider whether it is ever truly possible to unlearn
              ideologies ingrained through social conditioning and, more
              importantly, whether society bears some responsibility for the
              behavior of individuals it has shaped.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <Image
                src={natureImage}
                width={5000}
                height={500}
                alt=""
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-16">
          <div className="flex items-center">
            <Image
              src={churchImage}
              width={500}
              height={300}
              alt=""
              className="rounded-2xl"
            />
          </div>
          <div className="w-1/2">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Dog in the Church</h3>
              <p className="font-semibold">
                One of the main concerns about <i>White Dog</i> is that its narrative
                encourages viewers to focus more on the dog&apos;s
                rehabilitation than on the experiences of the humans it attacks.
                The film&apos;s structure shifts the emotional weight of the
                story onto the question of whether the dog can be saved, instead
                of fully addressing the harm it inflicts. This emotional
                displacement risks softening the impact of the film&apos;s
                message, as viewers may feel more sympathy for the animal than
                for its victims. This shift in focus is particularly evident
                after the scene in which the dog kills a man inside a church.
                It&apos;s almost direspecting that the dog&apos;s keeper
                insisted on continuing with rehabilitation, even after such a
                violent incident and the fact that the trainer himself was a
                black man. At that point, it didn&apos;t seem to matter whether
                the dog could be “cured” or not, the lives it had taken could
                never be brought back. The film&apos;s decision to prioritize
                the dog&apos;s potential redemption over the finality of its
                actions complicates the audience&apos;s emotional response. It
                forces viewers to grapple with the unsettling question of
                whether the dog&apos;s violent behavior can ever be fully
                unlearned, or whether some damage is simply irreversible.
              </p>
            </div>
          </div>
        </div>
        <footer className="p-8 text-center font-semibold">
          White Dog offers a thought-provoking and unsettling examination of
          learned hatred through the actions of a dog conditioned to enact
          racist violence. While the film succeeds in raising important
          questions about the origins of hate and the possibility of redemption,
          it also demonstrates the limitations of using animals as stand-ins for
          human problems. By distancing viewers from the human impact of racism,
          the film risks weakening its message.
        </footer>
      </main>
    </div>
  );
}
