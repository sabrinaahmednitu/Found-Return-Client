import { ReactNode } from "react";

export default function layout({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) {
  return (
    <>
      {children}
      <h1>are you from here</h1>
      {recentPosts}
    </>
  );
}
