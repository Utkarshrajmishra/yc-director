import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const quuery = (await searchParams).query;
  const posts = [
    {
      __createdAt: new Date().toISOString(),
      view: 55,
      author: { _id: 1, name: "Utkarsh Raj Mishra" },
      _id: 1,
      description: "This is example",
      image: "",
      title: "we robots",
      category:'robotics'
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startups, <br /> Connect With Entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions
        </p>
        <SearchForm query={quuery} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {quuery ? `Search results for "${quuery}"` : "All Startups"}
        </p>
        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post, index) => (
              <StartupCard key={post?._id} post={post} />     
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
