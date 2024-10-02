import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="absolute left-0 top-0 flex w-full justify-between px-20 py-8">
      <span>Graydon von Gossler</span>
      <div className="flex gap-4">
        <Button variant="outline" className="rounded-full">
          GitHub
        </Button>
        <Button variant="outline" className="rounded-full">
          LinkedIn
        </Button>
        <Button className="rounded-full">Resume</Button>
      </div>
    </div>
  );
}
