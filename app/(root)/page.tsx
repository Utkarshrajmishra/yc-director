import SearchForm from "../components/SearchForm";

export default function Home(){
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startups, <br /> Connect With Entrepreneurs </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions
        </p>
        <SearchForm />
      </section>
    </>
  );
}