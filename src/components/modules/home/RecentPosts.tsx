import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "../../UI/Container";

import { getRecentPosts } from "@/src/services/RecentPosts";
import Card from "../../UI/ItemCard";

export default async function RecentPosts() {
  const { data: posts } = await getRecentPosts();

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recntly found and reported.
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        <h1>Recent Posted thing that could be yours</h1>
        {posts.map((post) => (
          <Card key={post?._id} post={post}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default">
          <Link href="/found-items"> See All </Link>
        </Button>
      </div>
    </Container>
  );
}
