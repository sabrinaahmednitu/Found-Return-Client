import { Button } from "@nextui-org/button";
import Link from "next/link";

import Container from "../../UI/Container";

export default function RecentPosts() {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recntly found and reported.
        </p>
      </div>
      <div className="my-8 frid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        <h1>Recent Posts</h1>
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default">
          <Link href="/found-items"> See All </Link>
        </Button>
      </div>
    </Container>
  );
}
