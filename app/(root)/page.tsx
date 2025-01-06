import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const quuery = (await searchParams).query;
  const posts=await client.fetch(STARTUPS_QUERY)
  console.log(JSON.stringify(posts, null ,2))
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
            posts.map((post:StartupTypeCard) => (
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
