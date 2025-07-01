import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-white text-black">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-4xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Button href="/">Go Home</Button>
    </div>
  );
}
