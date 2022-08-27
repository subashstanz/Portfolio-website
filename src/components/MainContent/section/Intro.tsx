
type Props = {};

const PortFolioIntro = (props: Props) => {
  return (
    <section className="h-[48.313rem] w-[56.25rem] flex items-start justify-center flex-col">
      <div className="mb-4 text-base font-normal font-semibold text-normal">
        Hi, my name is{" "}
      </div>
      <h2 className="mb-2 font-sans font-semibold tracking-wide align-middle duration-300 ease-in text-7xl text-secondary ">
        Subash
      </h2>
      <div className="mb-4 font-sans text-6xl font-semibold tracking-normal align-middle text-light">
        I build things for the web
      </div>
      <div className="text-lg font-normal leading-7 text-normal">
        I am a tech fanatic with experience in the start-up world and have a
        great passion for business and analytics, looking forward to working
        with tech cohorts and love to interact with a lot of people. I am
        passionate to be in a competitive environment and devoting myself to the
        welfare of society.
      </div>
    </section>
  );
};

export default PortFolioIntro;
