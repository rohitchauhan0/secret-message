import { Suspense } from "react";
import ReadLoveLetter from "./_components/ReadLoveLetter";


export default function ReadPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ReadLoveLetter />
    </Suspense>
  );
}
